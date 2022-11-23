const { create } = require("ipfs-http-client");

const ipfs = create("https://ipfs.infura.io:5001");

async function run() {
  const files = [
    {
      path: "/",
      content: JSON.stringify({
        name: "Torch",
        attributes: [
          {
            trait_type: "of four",
            value: "one",
          },
        ],
        image:
          "https://gateway.pinata.cloud/ipfs/QmWULzMVXQMnBjkfRx5sbbfC4cnFeHtVJJj4K5d4CQcGCG",
        description: "Suprised lion dunks!",
      }),
    },
  ];

  const result = await ipfs.add(files);
  console.log(result);
}

run();
