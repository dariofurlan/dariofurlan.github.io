import { observer } from "mobx-react-lite";
import WhoAmI from "./WhoAmI";


export default observer(function HomeView() {
    return <>
        <WhoAmI/>
    </>
})