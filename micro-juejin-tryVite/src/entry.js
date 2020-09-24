(global => {
    global['purehtml'] = {
        bootstrap: (props) => {

            console.log('Vite App  bootstrap');
            return Promise.resolve();
        },
        mount: (props) => {
            console.log('Vue')
            console.log(Vue)
            window.microContainer = props.container
            console.log(props.container)
            props.setGlobalState({testAttr:props.container})
            console.log('Vite App mount');
            // onGlobalStateChange = props.onGlobalStateChange;
            // setGlobalState = props.setGlobalState;

            console.log('hello!!!!!!!!!!!!!!')
                function imp(){
                    console.log('imp')
                }
                typeof imp()
            // ((props)=>import('./main')(props))(props)
        },
        unmount: () => {
            console.log('Vite App unmount');


            return Promise.resolve();
        },
    };
})(window);