import Authenticated from "@/Layouts/Authenticated/Index";
import SubscriptionCard from "@/Components/SubscriptionCard";
import { Inertia } from "@inertiajs/inertia";
import { Head } from "@inertiajs/inertia-react";

export default function SubscriptionPlan({ auth, subscriptionPlans, env }) {
    const selectSubscription = (id) => {
        Inertia.post(
            route("user.dashboard.subscriptionPlan.userSubscribe", {
                subscriptionPlan: id,
            }),
            {},
            //Request Payload - Partial Visits/Partial Reloads
            /* Menjalankan request ke controller tujuan, lalu kembali ke halaman yang sama dengan props yang berbeda */
            {
                only: ["userSubscription"],
                onSuccess: ({ props }) => {
                    onSnapMidtrans(props.userSubscription);
                },
            }
        );
    };

    const onSnapMidtrans = (userSubscription) => {
        snap.pay(userSubscription.snap_token, {
            onSuccess: function (result) {
                console.log("onSuccess: ", { result });
                Inertia.visit(route("user.dashboard.index"));
            },
            // Optional
            onPending: function (result) {
                console.log("onPending: ", { result });
            },
            // Optional
            onError: function (result) {
                console.log("onError: ", { result });
            },
        });
    };
    return (
        <Authenticated auth={auth}>
            <Head title="Subscription Plan">
                <script
                    src="https://app.sandbox.midtrans.com/snap/snap.js"
                    data-client-key={env.MIDTRANS_CLIENTKEY}
                ></script>
            </Head>
            <div className="py-20 flex flex-col items-center">
                <div className="text-black font-semibold text-[26px] mb-3">
                    Pricing for Everyone
                </div>
                <p className="text-base text-gray-1 leading-7 max-w-[302px] text-center">
                    Invest your little money to get a whole new experiences from
                    movies.
                </p>

                <div className="flex justify-center gap-10 mt-[70px]">
                    {subscriptionPlans.map((subscriptionPlan) => {
                        return (
                            <SubscriptionCard
                                key={`subscription-plan-${subscriptionPlan.id}`}
                                name={subscriptionPlan.name}
                                price={subscriptionPlan.price}
                                durationinMonth={
                                    subscriptionPlan.active_period_in_months
                                }
                                features={JSON.parse(subscriptionPlan.features)}
                                isPremium={
                                    subscriptionPlan.is_premium == 0
                                        ? false
                                        : true
                                }
                                onSelectSubscription={() =>
                                    selectSubscription(subscriptionPlan.id)
                                }
                            />
                        );
                    })}
                </div>
            </div>
        </Authenticated>
    );
}
