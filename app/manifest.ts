import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'Solar Energy Systems',
        short_name: 'Solar Systems',
        description: 'Solar Power Plants | Renewable Energy Solutions',
        start_url: '/',
        display: 'standalone',
        background_color: '#0B1120',
        theme_color: '#0056D2',
        icons: [
            {
                src: '/assets/logo.jpg',
                sizes: 'any',
                type: 'image/jpeg',
            },
        ],
    }
}
