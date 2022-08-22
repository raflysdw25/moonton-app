// Components
import Authenticated from "@/Layouts/Authenticated/Index";
import Button from "@/Components/Button";
import FlashMessage from "@/Components/FlashMessage";

// Helper
import { Link } from "@inertiajs/inertia-react";

export default function Index({ auth, flashMessage }) {
    return (
        <Authenticated auth={auth}>
            <Link href={route("admin.dashboard.movie.create")}>
                <Button type="button" className="w-40 mb-8">
                    Insert New Movie
                </Button>
            </Link>

            {/* Object?.property atau in operator digunakan untuk melakukan pengecekkan apakah property ada di object atau keturunan dari propertiesnya */}

            {flashMessage?.message && (
                <FlashMessage message={flashMessage.message} />
            )}
        </Authenticated>
    );
}
