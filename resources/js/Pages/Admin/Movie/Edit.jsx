// Components
import Button from "@/Components/Button";
import Checkbox from "@/Components/Checkbox";
import Input from "@/Components/Input";
import InputError from "@/Components/InputError";
import Label from "@/Components/Label";
import Authenticated from "@/Layouts/Authenticated/Index";

// Helper
import React from "react";
import { Head, Link, useForm } from "@inertiajs/inertia-react";
import { Inertia } from "@inertiajs/inertia";

export default function Edit({ auth, movie }) {
    const { data, setData, processing, errors } = useForm({
        ...movie,
    });

    const onHandleChange = (event) => {
        const target = event.target;
        const name = target.name;
        let value = null;
        if (target.type === "file") {
            value = target.files[0];
        } else if (target.type === "checkbox") {
            value = target.checked;
        } else {
            value = target.value;
        }

        setData(name, value);
    };

    const submit = (e) => {
        e.preventDefault();

        if (data.thumbnail === movie.thumbnail) {
            delete data.thumbnail;
        }

        Inertia.post(route("admin.dashboard.movie.update", movie.id), {
            _method: "PUT",
            ...data,
        });
    };

    return (
        <Authenticated auth={auth}>
            <Head title="Admin - Update Movie" />
            <h1 className="text-xl">Update Movie: {movie.name}</h1>
            <hr className="mb-[12px] mt-[12px]" />
            <form onSubmit={submit}>
                <div className="flex flex-col gap-6">
                    <div>
                        <Label forInput="name">Name</Label>
                        <Input
                            id="name"
                            type="text"
                            name="name"
                            placeholder="Enter the name of the movie"
                            isFocused={true}
                            handleChange={onHandleChange}
                            variant="primary-outline"
                            isError={errors.name}
                            defaultValue={movie.name}
                        />
                        <InputError message={errors.name} className="mt-2" />
                    </div>
                    <div className="mt-4">
                        <Label forInput="category">Category</Label>
                        <Input
                            id="category"
                            type="text"
                            name="category"
                            placeholder="Enter the categories of the movie"
                            handleChange={onHandleChange}
                            variant="primary-outline"
                            isError={errors.category}
                            defaultValue={movie.category}
                        />
                        <InputError
                            message={errors.category}
                            className="mt-2"
                        />
                    </div>
                    <div className="mt-4">
                        <Label forInput="video_url">Video URL</Label>
                        <Input
                            id="video_url"
                            type="url"
                            name="video_url"
                            placeholder="Enter the categories of the movie"
                            handleChange={onHandleChange}
                            variant="primary-outline"
                            isError={errors.video_url}
                            defaultValue={movie.video_url}
                        />
                        <InputError
                            message={errors.video_url}
                            className="mt-2"
                        />
                    </div>
                    <div className="mt-4">
                        <Label forInput="thumbnail">Movie Thumbnail</Label>
                        <img
                            src={`/storage/${movie.thumbnail}`}
                            alt={movie.name}
                            className="w-50 ml-auto mr-auto"
                        />
                        <Input
                            id="thumbnail"
                            type="file"
                            name="thumbnail"
                            placeholder="Insert thumbnail of the movie"
                            handleChange={onHandleChange}
                            variant="primary-outline"
                            isError={errors.thumbnail}
                        />
                        <InputError
                            message={errors.thumbnail}
                            className="mt-2"
                        />
                    </div>
                    <div className="mt-4">
                        <Label forInput="rating">Rating</Label>
                        <Input
                            id="rating"
                            type="number"
                            name="rating"
                            placeholder="Enter the rating of the movie"
                            handleChange={onHandleChange}
                            variant="primary-outline"
                            isError={errors.rating}
                            defaultValue={movie.rating}
                        />
                        <InputError message={errors.rating} className="mt-2" />
                    </div>
                    <div className="flex flex-row mt-4 items-center">
                        <Checkbox
                            id="is_featured"
                            name="is_featured"
                            handleChange={onHandleChange}
                            className="mb-1"
                            checked={movie.is_featured}
                        />
                        <Label forInput="is_featured" className="ml-3 mt-1">
                            Is Movie Featured?
                        </Label>
                    </div>
                    <Button
                        type="submit"
                        variant="primary"
                        className="mt-4"
                        processing={processing}
                    >
                        Save
                    </Button>
                </div>
            </form>
        </Authenticated>
    );
}
