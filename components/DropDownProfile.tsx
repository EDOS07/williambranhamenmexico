'use client';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@heroui/react";

interface SubSection {
    label: string;
    key: number;
    href: string;
}

interface MenuItems {
    name: string;
    key: number;
    section?: SubSection[];
}

interface MenuDropDownProps {
    nameSections: MenuItems[];
}

export default function DropDownProfile({ nameSections }: MenuDropDownProps) {

    return (
        <Dropdown backdrop="blur">
            <DropdownTrigger>
                <Button className="w-[6.5rem] font-bold">
                    {nameSections.map((section) => (section.name))}
                </Button>
            </DropdownTrigger>
            <DropdownMenu className="text-right" variant="faded" aria-label="Static Actions"
                itemClasses={{
                    base: [
                        "text-right"
                    ]
                }}
            >
                <>
                    {nameSections.map((section) => (
                        section.section ? (
                            section.section.map((subSection) => (
                                <DropdownItem className="items-end" key={subSection.key} href={subSection.href}>
                                    {subSection.label}
                                </DropdownItem>
                            ))
                        ) : (
                            <DropdownItem className="items-end" key={section.key} href="#">
                                {section.name}
                            </DropdownItem>
                        )
                    ))}
                </>
            </DropdownMenu>
        </Dropdown>
    );
}

