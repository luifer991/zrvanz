import { Texts } from "../components/texts";
import "../components/styles/section.css";

export function Section() {
    return (
        <div className="section">
            <Texts
                styles="section__text"
                subtitle="Personaliza Tu Fragancia"
                body="Elige tus notas favoritas y crea una fragancia exclusiva. Hazla tan única como tú." />
        </div>
    )
}