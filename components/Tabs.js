import { Tabs } from 'antd';
import Image from "next/image"

export function TabsLanding() {
    const { TabPane } = Tabs;

    function callback(key) {
        console.log(key);
    }
    return (
        <>
            <Tabs defaultActiveKey="1" onChange={callback}>
                <TabPane tab="Business & Services" key="1">
                    <Image src="/tab1.png" height={650} width={800} className="object-cover" />
                </TabPane>
                <TabPane tab="Portfolio & CV" key="2">
                    <Image src="/tab2.png" height={650} width={800} className="object-cover" />
                </TabPane>
                <TabPane tab="Creative" key="3">
                    <Image src="/tab3.png" height={650} width={800} className="object-cover" />
                </TabPane>
                <TabPane tab="eCommerce" key="4">
                    <Image src="/tab4.png" height={650} width={800} className="object-cover" />
                </TabPane>
                <TabPane tab="Events & Entertainment" key="5">
                    <Image src="/tab5.png" height={650} width={800} className="object-cover" />
                </TabPane>
                <TabPane tab="Landing Pages" key="6">
                    <Image src="/tab6.png" height={650} width={800} className="object-cover" />
                </TabPane>
                <TabPane tab="Media & Blogs" key="7">
                    <Image src="/tab7.png" height={650} width={800} className="object-cover" />
                </TabPane>
                <TabPane tab="Health & Wellness" key="8">
                    <Image src="/tab8.png" height={650} width={800} className="object-cover" />
                </TabPane>
            </Tabs>
        </>
    )
}
