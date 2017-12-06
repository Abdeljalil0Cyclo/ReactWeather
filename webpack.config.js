module.exports={
 entry :__dirname+'/app/app.jsx',
 output:{
   path:__dirname,
   filename:'/public/bundle.js'
 },
 resolve:{
   root:__dirname,
   alias: {
     Main : __dirname+'/app/components/Main.jsx',
     Nav : __dirname+'/app/components/Nav.jsx',
     Weather : __dirname+'/app/components/Weather.jsx',
     WeatherForm : __dirname+'/app/components/WeatherForm.jsx',
     WeatherMessage : __dirname+'/app/components/WeatherMessage.jsx',
     About : __dirname+'/app/components/About.jsx',
     Examples : __dirname+'/app/components/Examples.jsx',
     openWeatherMap : __dirname+'/app/api/openWeatherMap'
   },
   extensions:['','.js','.jsx']
 },
 module: {
   loaders :[
     {
       loader :'babel-loader',
       query :{
         presets : ['react','es2015','stage-0']
       },
       test:/\.jsx?$/,
       exclude : /(node_modules|bower_components)/
     }
   ]
 },
  devtool :'cheap-module-eval-source-map'
};
