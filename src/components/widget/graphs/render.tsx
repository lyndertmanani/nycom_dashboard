import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import Thematic from './areas/thematic';
import Distributes from './areas/distributes';
import DataGrid from "./areas/view"
const render = () => {
    return (
        <>
            <div className="flex w-full flex-col shadow-none bg-transparent py-5 px-10">
                <Tabs aria-label="Options" radius="full" variant="underlined" color="primary" >

                <Tab key="Datagrid" title="View">
               <DataGrid/>
                 </Tab>
                    <Tab key="Thematic" title="Thematic">

                         <Thematic/>
                    </Tab>

                    <Tab key="Economic" title="Economic">
                        <p>
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                            ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur.
                        </p>
                    </Tab>

                    <Tab key="Education" title="Education">
                        <Card className="shadow-none bg-transparent">
                            <CardBody>
                                Excepteur sint occaecasdvlfkvnolekqpekt cupidatat non proident, sunt in culpa qui officia deserunt
                                mollit anim id est laborum.
                            </CardBody>
                        </Card>
                    </Tab>


                    <Tab key="Health" title="Health">
                        <Card className="shadow-none bg-transparent">
                            <CardBody>
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                mollit anim id est laborum.afkfelfkwne
                            </CardBody>
                        </Card>
                    </Tab>


                    
                    <Tab key="Gender" title="Gender">
                        <Card className="shadow-none bg-transparent">
                            <CardBody>
                                Excepteur sint ocfwekjheqofwcaecat cupidatat non proident, sunt in culpa qui officia deserunt
                                mollit anim id est laborum.
                            </CardBody>
                        </Card>
                    </Tab>


                    <Tab key="Distributes" title="Distribution of youth led organaistion">
                       <Distributes/>
                    </Tab>
                </Tabs>
            </div>
        </>
    )
}
export default render