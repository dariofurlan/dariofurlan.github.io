import { observer } from "mobx-react-lite";
import Tech from "./Tech";
import WhoAmI from "./WhoAmI";


export default observer(function HomeView() {
    return <>
        <WhoAmI/>
        <Tech/>
    </>
})