module.exports = {
  plugins: [require("autoprefixer"),require("css-mqpacker"), require("cssnano")({
   preet: [
      'default',{
          discardComments:{
              removeAll: true
          }
      }
   ]   
  })]
};
