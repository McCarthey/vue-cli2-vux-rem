import HelloWorld from "@/components/HelloWorld";
import HelloFromVux from "@/components/HelloFromVux";
import HelloRx from "@/components/HelloRx";

export default [
	{
		path: "/",
		name: "HelloWorld",
		component: HelloWorld
	},
	{
		path: "/vux",
		name: "HelloFromVux",
		component: HelloFromVux
	},
	{
		path: "/rx",
		name: "HelloRx",
		component: HelloRx
	}
];
