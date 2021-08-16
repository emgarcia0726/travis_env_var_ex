
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  const favFood = process.env.FAVORITE_FOOD;
  while(true) {
    console.log("Microservices rock! Go get some ${favFood}");
    await sleep(5000);
  }
}

main();
