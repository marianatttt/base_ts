import {FC} from "react";
import {CarDetails} from "./components";
import {Navigate, Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts";
import {CarPage} from "./pages";

const App: FC = () => {
 return (
  <div>
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'cars'}/>}/>
                <Route path={'cars'} element={<CarPage/>}>
                    <Route path={':id'} element={<CarDetails/>}/>
                </Route>
            </Route>
        </Routes>
  </div>
 );
};

export {App};
