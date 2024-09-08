import './styles.scss';

import { PuffLoader } from "react-spinners";

export default function Loader() {
    return (
        <div className="loader_container">
            <PuffLoader color="var(--theme-color)" />
        </div>
    )
}