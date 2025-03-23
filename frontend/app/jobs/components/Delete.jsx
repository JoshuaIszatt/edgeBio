"use client";

{/* useRouter hook enables router object functions */}
import { useRouter } from "next/navigation"

export default function DeleteJob({ id }) {
    const router = useRouter();

    const handleDelete = async () => {
        const url = `http://localhost:4000/jobs/${id}`;
        const res = await fetch(url, {
            method: "DELETE",
        });

        if (res.status === 200) {
            router.refresh();
        }
    };

    return (
        <button onClick={handleDelete} className="delete-button">
            Delete
        </button>
    );
}