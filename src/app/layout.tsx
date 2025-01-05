import { ReactNode } from 'react';
import '@/styles/index.scss';

interface IProps {
    children: ReactNode;
}

export default function RootLayout({ children }: IProps) {
    return (
        <html lang="ru-RU">
            <head>
                <link rel="icon" href="/favicon.svg" />
            </head>
            <body>{children}</body>
        </html>
    );
}
