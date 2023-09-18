const config ={
    mode:'production',
    entry:{
        index:'./src/js/index.js',
        //contacts:'./src/js/contacts.js',
        //about:'./src/js/about.js',
    },//точки входа которые он будет собирать
    output:{
        filename:'[name].bundle.js',
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use:['style-loader','css-loader'],
            },
        ],
    },
};// для того что бы обрабатывать стили

module.exports = config;