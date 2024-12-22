import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Movie, PageProps } from '@/types';
import { Head } from '@inertiajs/react';

export default function Dashboard({
    movie,
}: PageProps<{ movie: Movie }>) {
    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    {movie.title}
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="p-6 overflow-hidden bg-white shadow-sm sm:rounded-lg">
                      <p>{movie.description}</p>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
