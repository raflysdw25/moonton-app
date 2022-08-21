//Component
import SubscriptionDetail from "@/Layouts/Authenticated/SubscriptionDetail";
import MenuItem from "@/Layouts/Authenticated/MenuItem";

// Helper
import { Link } from "@inertiajs/inertia-react";
import { UserMenu, UserOthers } from "@/Layouts/Authenticated/MenuList";

export default function Sidebar({ auth }) {
    return (
        <aside className="fixed z-50 w-[300px] h-full">
            <div className="flex flex-col p-[30px] pr-0 border-r border-gray-[#F1F1F1] overflow-y-auto h-full">
                <Link href="/">
                    <img src="../images/moonton.svg" alt="" />
                </Link>
                <div className="links flex flex-col mt-[60px] h-full gap-[50px]">
                    <div>
                        <div className="text-gray-1 text-sm mb-4">Menu</div>
                        {/* route().current(routeName) : mendapatkan route saat ini */}
                        {UserMenu.map((menu, index) => {
                            return (
                                <MenuItem
                                    key={`menu-${menu.text}-${index}`}
                                    link={menu.link}
                                    icon={menu.icon}
                                    text={menu.text}
                                    isActive={
                                        menu.link && route().current(menu.link)
                                    }
                                />
                            );
                        })}
                    </div>

                    <div>
                        <div className="text-gray-1 side-link mb-4">Others</div>
                        {/* route().current(routeName) : mendapatkan route saat ini */}
                        {UserOthers.map((menu, index) => {
                            return (
                                <MenuItem
                                    key={`other-${menu.text}-${index}`}
                                    link={menu.link}
                                    icon={menu.icon}
                                    text={menu.text}
                                    method={menu.method}
                                    isActive={
                                        menu.link && route().current(menu.link)
                                    }
                                />
                            );
                        })}
                    </div>

                    {auth.activePlan && (
                        <SubscriptionDetail
                            name={auth.activePlan.name}
                            isPremium={auth.activePlan.isPremium}
                            remainingActiveDays={
                                auth.activePlan.remainingActiveDays
                            }
                            activeDays={auth.activePlan.activeDays}
                        />
                    )}
                </div>
            </div>
        </aside>
    );
}
