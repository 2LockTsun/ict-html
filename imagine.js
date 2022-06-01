import NavigationBar from "./src/next-app/components/navigationBar";
import { StyleHTMLAttributes } from "react";

export default function Bruh () {
    return(
        <div>
            <NavigationBar>

                <footer className={StyleSheet.footer}>
                    Copyright belongs to :
                    <span><a href="https://www.cpu.edu.hk"></a></span>
                </footer>
            </NavigationBar>
        </div>
    )
}