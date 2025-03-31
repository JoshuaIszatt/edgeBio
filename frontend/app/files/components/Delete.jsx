"use client";

{/* useRouter hook enables router object functions */}
import { useRouter } from "next/navigation"

export default function DeleteMetadata({ id, host, port }) {
    const router = useRouter();

    const handleDelete = async () => {
        // Set destination
        const url = `http://${host}:${port}/files/${id}`;
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
