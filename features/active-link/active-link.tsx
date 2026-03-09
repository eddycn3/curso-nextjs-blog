"use client"

import { cn } from "@/lib/utils"
import Link, { LinkProps } from "next/link"
import { usePathname } from "next/navigation";


type ActiveLinkProps = {
    children: React.ReactNode;
} & LinkProps
export const ActiveLink = ({ children, href, ...rest }: ActiveLinkProps) => {
    const pathname = usePathname();
    const isCurrentPath = pathname === href || pathname === rest.as;

    return (
        <Link href={href} className={cn('text-action-sm transition-colors hover:text-blue-200',
            isCurrentPath ? 'text-blue-200' : 'text-gray-100'

        )}
            {...rest}
        >{children}</Link>
    )
}