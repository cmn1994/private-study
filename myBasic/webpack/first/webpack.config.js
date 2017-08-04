module.exports = {
	//在一个单独的文件中产生一个完整且功能完全的文件。这个文件具有最好的source map，但是它会减慢打包文件的构建速度；
	devtool: 'eval-souurce-map',
	//入口文件
	entry: __dirname + '/app/main.js',
	//输出文件
	output: {
		path: __dirname + '/public',
		filename: 'bundle.js'
	},
	devServer: {
		contentBase: './public', //为一个目录下的文件提供本地服务器
		port: 5300,      //设置默认监听端口,默认为8080
		inline: true,   //源文件改变时会自动刷新页面
		// color: true,    //使终端输出的文件为彩色的,
		historyApiFallback: true //所有的跳转将指向index.html
	},
	module: {
		loaders:[ 
			{
				test: /\.json$/,
				loader: 'json-loader',
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			},
			{
				test: /\.css$/,
				//css-loader使你能够使用类似@import 和 url(...)的方法实现 require()的功能,
				//style-loader将所有的计算后的样式加入页面中，二者组合在一起使你能够把样式表嵌入webpack打包后的JS文件中
				loader: 'style-loader!css-loader', //感叹号的作用在于使同一文件能够使用不同类型的loader
			}
		]
	}


};