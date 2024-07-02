import React from "react";
import { Card, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";

export default function IntroduceCard({
    title, subtitle, description, link, linkTitle
}
    :
    {
        title: string, subtitle: string, description: string, link: string, linkTitle: string
    }) {
    return (
        <Card className="max-w-[400px]">
            <CardHeader className="flex gap-3">
                <Image
                    alt="nextui logo"
                    height={40}
                    radius="sm"
                    src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
                    width={40}
                />
                <div className="flex flex-col">
                    <p className="text-md">{title}</p>
                    <p className="text-small text-default-500">{subtitle}</p>
                </div>
            </CardHeader>
            <Divider />
            <CardBody>
                <p>{description}</p>
            </CardBody>
            <Divider />
            <CardFooter>
                <Link
                    isExternal
                    showAnchorIcon
                    href={link}
                >
                    {linkTitle}
                </Link>
            </CardFooter>
        </Card>
    );
}