async function main() {
  const NFTorch = await hre.ethers.getContractFactory("NFTorch");
  const nft = await NFTorch.deploy();

  await nft.deployed();

  console.log("NFTorch deployed to:", nft.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
