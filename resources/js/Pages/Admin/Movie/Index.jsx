// Components
import Authenticated from "@/Layouts/Authenticated/Index";
import Button from "@/Components/Button";
import FlashMessage from "@/Components/FlashMessage";

// Helper
import { Head, Link, useForm } from "@inertiajs/inertia-react";

export default function Index({ auth, flashMessage, movies }) {
    const { delete: destroy, put } = useForm();
    return (
        <Authenticated auth={auth}>
            <Head title="List of Movie" />
            <Link href={route("admin.dashboard.movie.create")}>
                <Button type="button" className="w-40 mb-8">
                    Insert New Movie
                </Button>
            </Link>

            {/* Object?.property atau in operator digunakan untuk melakukan pengecekkan apakah property ada di object atau keturunan dari propertiesnya */}

            {flashMessage?.message && (
                <FlashMessage message={flashMessage.message} />
            )}

            <table className="table-fixed w-full text-center">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Rating</th>
                        <th colSpan={2}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {movies.map((movie) => (
                        <tr key={movie.id}>
                            <td>
                                <img
                                    src={`/storage/${movie.thumbnail}`}
                                    alt={movie.name}
                                    className="w-32 rounded-md"
                                />
                            </td>
                            <td>{movie.name}</td>
                            <td>{movie.category}</td>
                            <td>{movie.rating.toFixed(1)}</td>
                            <td>
                                <Link
                                    href={route(
                                        "admin.dashboard.movie.edit",
                                        movie.id
                                    )}
                                >
                                    <Button type="button" variant="warning">
                                        Edit
                                    </Button>
                                </Link>
                            </td>
                            <td>
                                {/* destroy: diambil dari class useForm inertia-react, digunakan untuk membuat method destroy lalu diarahkan ke route destroy controller */}
                                {movie.deleted_at && (
                                    <div
                                        onClick={() => {
                                            put(
                                                route(
                                                    "admin.dashboard.movie.restore",
                                                    movie.id
                                                )
                                            );
                                        }}
                                    >
                                        <Button type="button" variant="danger">
                                            Restore
                                        </Button>
                                    </div>
                                )}
                                {!movie.deleted_at && (
                                    <div
                                        onClick={() => {
                                            destroy(
                                                route(
                                                    "admin.dashboard.movie.destroy",
                                                    movie.id
                                                )
                                            );
                                        }}
                                    >
                                        <Button type="button" variant="danger">
                                            Delete
                                        </Button>
                                    </div>
                                )}
                                {/* <div
                                    onClick={() => {
                                        movie.deleted_at
                                            ? put(
                                                  route(
                                                      "admin.dashboard.movie.restore",
                                                      movie.id
                                                  )
                                              )
                                            : destroy(
                                                  route(
                                                      "admin.dashboard.movie.destroy",
                                                      movie.id
                                                  )
                                              );
                                    }}
                                >
                                    <Button type="button" variant="danger">
                                        {movie.deleted_at
                                            ? "Restore"
                                            : "Delete"}
                                    </Button>
                                </div> */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Authenticated>
    );
}
