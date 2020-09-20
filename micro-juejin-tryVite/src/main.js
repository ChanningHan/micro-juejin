import { createApp } from 'vue'
import App from './App.vue'
import "./index.css"


// import "./public-path";


let vm = null;


async function VueRender(props = {}) {
    const { container } = props;
    vm = await createApp(App).mount(container ? container.querySelector("#app") : "#app")
    return Promise.resolve()
}

/*如果不作为微应用加载则直接调用VueRender*/
if (!window.__POWERED_BY_QIANKUN__) {
    VueRender().then(()=>{
        console.log('作为非微应用加载')
    });
}


export let onGlobalStateChange;
export let setGlobalState;


(global => {
    global['purehtml'] = {
        bootstrap: (props) => {

            console.log('Vite App  bootstrap');
            return Promise.resolve();
        },
        mount: (props) => {
            console.log('Vite App mount');
            onGlobalStateChange = props.onGlobalStateChange;
            setGlobalState = props.setGlobalState;

            //这里加载完毕后可以改变全局的状态通知主应用让其Loading组件消失
            setGlobalState({ isLoadingMicro: false });

            return VueRender(props);
        },
        unmount: () => {
            console.log('Vite App unmount');

            // //这里微应用注销后通知主应用让其Loading组件出现
            setGlobalState({ isLoadingMicro: true });

            return Promise.resolve();
        },
    };
})(window);

