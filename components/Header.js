import { Button, Menu, MenuHandler, MenuItem, MenuList } from "@material-tailwind/react";
import Image from "next/image";

export default function Header() {
    return (
        <>
            <div className="bz-w-full bz-h-14 bz-py-3 bz-px-6 bz-flex">
                <div className="bz-flex bz-flex-grow">
                    <Image
                        src="/images/buzcamp.png"
                        height={100}
                        width={100}
                        alt="buzcamp-logo"
                        style={{ width : '37px', height: '37px' }}
                    />
                </div>
                <div className="bz-flex bz-flex-col">
                    {/* <Menu className="bz-min-w-min bz-p-4">
                        <MenuHandler>
                            <Card className="bz-cardShadow">
                                <span className="bz-text-sm">English(UK)</span>
                            </Card>
                        </MenuHandler>
                    </Menu>
                    */}
                    <Menu>
                        <MenuHandler>
                            <Button variant="gradient">Open Menu</Button>
                        </MenuHandler>
                        <MenuList>
                            <MenuItem>Menu Item 1</MenuItem>
                            <MenuItem>Menu Item 2</MenuItem>
                            <MenuItem>Menu Item 3</MenuItem>
                        </MenuList>
                    </Menu>

                </div>
            </div>
        </>
    )
}