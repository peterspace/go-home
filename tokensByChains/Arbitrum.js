const tokens = [
  {
    symbol: 'ETH',
    name: 'Ethereum',
    decimals: 18,
    address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
    logoURI:
      'https://tokens.1inch.io/0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee.png',
    tags: ['native'],
  },
  {
    symbol: 'BADGER',
    name: 'Badger',
    decimals: 18,
    address: '0xbfa641051ba0a0ad1b0acf549a89536a0d76472e',
    logoURI:
      'https://tokens.1inch.io/0x3472a5a71965499acd81997a54bba8d852c6e53d.png',
    tags: ['tokens'],
  },
  {
    symbol: 'BAL',
    name: 'Balancer',
    decimals: 18,
    address: '0x040d1edc9569d4bab2d15287dc5a4f10f56a56b8',
    logoURI:
      'https://tokens.1inch.io/0xba100000625a3754423978a60c9317c58a424e3d.png',
    tags: ['tokens'],
  },
  {
    symbol: 'CELR',
    name: 'CelerToken',
    decimals: 18,
    logoURI: 'https://zapper.fi/images/CELR-icon.png',
    address: '0x3a8b787f78d775aecfeea15706d4221b40f345ab',
    tags: ['tokens'],
  },
  {
    symbol: 'COMP',
    name: 'Compound',
    decimals: 18,
    address: '0x354a6da3fcde098f8389cad84b0182725c6c91de',
    logoURI:
      'https://tokens.1inch.io/0xc00e94cb662c3520282e6f5717214004a7f26888.png',
    tags: ['tokens'],
  },
  {
    symbol: 'CRV',
    name: 'Curve DAO Token',
    decimals: 18,
    address: '0x11cdb42b0eb46d95f990bedd4695a6e3fa034978',
    logoURI:
      'https://tokens.1inch.io/0xd533a949740bb3306d119cc777fa900ba034cd52.png',
    tags: ['tokens'],
  },
  {
    symbol: 'DHT',
    name: 'dHedge DAO Token',
    decimals: 18,
    address: '0x8038f3c971414fd1fc220ba727f2d4a0fc98cb65',
    logoURI:
      'https://tokens.1inch.io/0xca1207647ff814039530d7d35df0e1dd2e91fa84.png',
    tags: ['tokens'],
  },
  {
    symbol: 'DXD',
    name: 'DXdao',
    decimals: 18,
    address: '0xc3ae0333f0f34aa734d5493276223d95b8f9cb37',
    logoURI:
      'https://tokens.1inch.io/0xa1d65e8fb6e87b60feccbc582f7f97804b725521.png',
    tags: ['tokens'],
  },
  {
    symbol: 'GMX',
    name: 'GMX',
    decimals: 18,
    address: '0xfc5a1a6eb076a2c7ad06ed22c90d7e710e35ad0a',
    logoURI:
      'https://tokens.1inch.io/0xfc5a1a6eb076a2c7ad06ed22c90d7e710e35ad0a.png',
    tags: ['tokens'],
  },
  {
    symbol: 'GNO',
    name: 'Gnosis Token',
    decimals: 18,
    address: '0xa0b862f60edef4452f25b4160f177db44deb6cf1',
    logoURI:
      'https://tokens.1inch.io/0x6810e776880c02933d47db1b9fc05908e5386b96.png',
    tags: ['tokens'],
  },
  {
    symbol: 'GRT',
    name: 'Graph Token',
    decimals: 18,
    address: '0x23a941036ae778ac51ab04cea08ed6e2fe103614',
    logoURI:
      'https://tokens.1inch.io/0xc944e90c64b2c07662a292be6244bdf05cda44a7.png',
    tags: ['tokens'],
  },
  {
    symbol: 'LAND',
    name: 'Land',
    decimals: 18,
    address: '0x3cd1833ce959e087d0ef0cb45ed06bffe60f23ba',
    logoURI:
      'https://tokens.1inch.io/0x9d986a3f147212327dd658f712d5264a73a1fdb0.png',
    tags: ['tokens'],
  },
  {
    symbol: 'LINK',
    name: 'ChainLink Token',
    decimals: 18,
    address: '0xf97f4df75117a78c1a5a0dbb814af92458539fb4',
    logoURI:
      'https://tokens.1inch.io/0x514910771af9ca656af840dff83e8264ecf986ca.png',
    tags: ['tokens'],
  },
  {
    symbol: 'MATH',
    name: 'MATH Token',
    decimals: 18,
    address: '0x99f40b01ba9c469193b360f72740e416b17ac332',
    logoURI:
      'https://tokens.1inch.io/0x08d967bb0134f2d07f7cfb6e246680c53927dd30.png',
    tags: ['tokens'],
  },
  {
    symbol: 'MCB',
    name: 'MCDEX Token',
    decimals: 18,
    address: '0x4e352cf164e64adcbad318c3a1e222e9eba4ce42',
    logoURI:
      'https://tokens.1inch.io/0x4e352cf164e64adcbad318c3a1e222e9eba4ce42.png',
    tags: ['tokens'],
  },
  {
    symbol: 'MKR',
    name: 'Maker',
    decimals: 18,
    address: '0x2e9a6df78e42a30712c10a9dc4b1c8656f8f2879',
    logoURI:
      'https://tokens.1inch.io/0x9f8f72aa9304c8b593d555f12ef6589cc3a579a2.png',
    tags: ['tokens'],
  },
  {
    symbol: 'PL2',
    name: 'Plenny',
    decimals: 18,
    address: '0x3642c0680329ae3e103e2b5ab29ddfed4d43cbe5',
    tags: ['tokens'],
  },
  {
    symbol: 'PREMIA',
    name: 'Premia',
    decimals: 18,
    address: '0x51fc0f6660482ea73330e414efd7808811a57fa2',
    logoURI:
      'https://tokens.1inch.io/0x6399c842dd2be3de30bf99bc7d1bbf6fa3650e70.png',
    tags: ['tokens'],
  },
  {
    symbol: 'SUSHI',
    name: 'SushiToken',
    decimals: 18,
    address: '0xd4d42f0b6def4ce0383636770ef773390d85c61a',
    logoURI:
      'https://tokens.1inch.io/0x6b3595068778dd592e39a122f4f5a5cf09c90fe2.png',
    tags: ['tokens'],
  },
  {
    symbol: 'SWPR',
    name: 'Swapr',
    decimals: 18,
    address: '0xde903e2712288a1da82942dddf2c20529565ac30',
    tags: ['tokens'],
  },
  {
    symbol: 'UNI',
    name: 'Uniswap',
    decimals: 18,
    address: '0xfa7f8980b0f1e64a2062791cc3b0871572f1f7f0',
    logoURI:
      'https://tokens.1inch.io/0x1f9840a85d5af5bf1d1762f925bdaddc4201f984.png',
    tags: ['tokens'],
  },
  {
    symbol: 'USDT',
    name: 'Tether USD',
    decimals: 6,
    address: '0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9',
    logoURI:
      'https://tokens.1inch.io/0xdac17f958d2ee523a2206206994597c13d831ec7.png',
    tags: ['tokens', 'PEG:USD'],
  },
  {
    symbol: 'USDC',
    name: 'USD Coin (Arb1)',
    decimals: 6,
    address: '0xff970a61a04b1ca14834a43f5de4533ebddb5cc8',
    logoURI:
      'https://tokens.1inch.io/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png',
    eip2612: true,
    tags: ['tokens', 'PEG:USD'],
  },
  {
    symbol: 'WBTC',
    name: 'Wrapped BTC',
    decimals: 8,
    address: '0x2f2a2543b76a4166549f7aab2e75bef0aefc5b0f',
    logoURI:
      'https://tokens.1inch.io/0x2260fac5e5542a773aa44fbcfedf7c193bc2c599.png',
    tags: ['tokens', 'PEG:BTC'],
  },
  {
    symbol: 'WETH',
    name: 'Wrapped Ether',
    decimals: 18,
    address: '0x82af49447d8a07e3bd95bd0d56f35241523fbab1',
    logoURI:
      'https://tokens.1inch.io/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2.png',
    wrappedNative: 'true',
    tags: ['tokens', 'PEG:ETH'],
  },
  {
    symbol: 'ZIPT',
    name: 'Zippie',
    decimals: 18,
    address: '0x0f61b24272af65eacf6adfe507028957698e032f',
    logoURI:
      'https://tokens.1inch.io/0xedd7c94fd7b4971b916d15067bc454b9e1bad980.png',
    tags: ['tokens'],
  },
  {
    symbol: 'DAI',
    name: 'Dai Stablecoin',
    decimals: 18,
    address: '0xda10009cbd5d07dd0cecc66161fc93d7c9000da1',
    logoURI:
      'https://tokens.1inch.io/0x6b175474e89094c44da98b954eedeac495271d0f.png',
    tags: ['tokens', 'PEG:USD'],
  },
  {
    symbol: 'MIM',
    name: 'Magic Internet Money',
    decimals: 18,
    eip2612: true,
    address: '0xfea7a6a0b346362bf88a9e4a88416b77a57d6c2a',
    logoURI:
      'https://tokens.1inch.io/0xfea7a6a0b346362bf88a9e4a88416b77a57d6c2a.png',
    tags: ['tokens'],
  },
  {
    symbol: 'SPELL',
    name: 'Spell Token',
    decimals: 18,
    address: '0x3e6648c5a70a150a88bce65f4ad4d506fe15d2af',
    logoURI:
      'https://tokens.1inch.io/0x3e6648c5a70a150a88bce65f4ad4d506fe15d2af.png',
    tags: ['tokens'],
  },
  {
    symbol: 'deUSDC',
    name: 'deBridge USD Coin',
    decimals: 6,
    address: '0x1ddcaa4ed761428ae348befc6718bcb12e63bfaa',
    logoURI:
      'https://tokens.1inch.io/0x1ddcaa4ed761428ae348befc6718bcb12e63bfaa_2.png',
    tags: ['tokens', 'PEG:USD'],
  },
  {
    symbol: 'NFTI',
    name: 'Scalara NFT Index',
    decimals: 18,
    address: '0xcfe3fbc98d80f7eca0bc76cd1f406a19dd425896',
    logoURI:
      'https://tokens.1inch.io/0xcfe3fbc98d80f7eca0bc76cd1f406a19dd425896.png',
    tags: ['tokens'],
  },
  {
    symbol: 'EMAX',
    name: 'EthereumMax',
    decimals: 18,
    address: '0x123389c2f0e9194d9ba98c21e63c375b67614108',
    logoURI:
      'https://tokens.1inch.io/0x123389c2f0e9194d9ba98c21e63c375b67614108.png',
    eip2612: true,
    tags: ['tokens'],
    isFoT: true,
  },
  {
    symbol: 'deETH',
    name: 'deBridge Ether',
    decimals: 18,
    address: '0xcab86f6fb6d1c2cbeeb97854a0c023446a075fe3',
    logoURI:
      'https://tokens.1inch.io/0xcab86f6fb6d1c2cbeeb97854a0c023446a075fe3.png',
    tags: ['tokens', 'PEG:ETH'],
  },
  {
    symbol: 'ELK',
    name: 'Elk',
    decimals: 18,
    address: '0xeeeeeb57642040be42185f49c52f7e9b38f8eeee',
    logoURI:
      'https://tokens.1inch.io/0xeeeeeb57642040be42185f49c52f7e9b38f8eeee.png',
    eip2612: true,
    tags: ['tokens'],
  },
  {
    symbol: 'SDL',
    name: 'Saddle DAO',
    decimals: 18,
    address: '0x75c9bc761d88f70156daf83aa010e84680baf131',
    logoURI:
      'https://tokens.1inch.io/0x75c9bc761d88f70156daf83aa010e84680baf131.png',
    eip2612: true,
    tags: ['tokens'],
  },
  {
    symbol: 'MYC',
    name: 'Mycelium',
    decimals: 18,
    address: '0xc74fe4c715510ec2f8c61d70d397b32043f55abe',
    logoURI:
      'https://tokens.1inch.io/0xc74fe4c715510ec2f8c61d70d397b32043f55abe.png',
    eip2612: true,
    tags: ['tokens'],
  },
  {
    symbol: 'VST',
    name: 'Vesta Stable',
    decimals: 18,
    address: '0x64343594ab9b56e99087bfa6f2335db24c2d1f17',
    logoURI:
      'https://tokens.1inch.io/0x64343594ab9b56e99087bfa6f2335db24c2d1f17.png',
    eip2612: true,
    tags: ['tokens', 'PEG:USD'],
  },
  {
    symbol: 'DPX',
    name: 'Dopex Governance Token',
    decimals: 18,
    address: '0x6c2c06790b3e3e3c38e12ee22f8183b37a13ee55',
    logoURI:
      'https://tokens.1inch.io/0x6c2c06790b3e3e3c38e12ee22f8183b37a13ee55.png',
    eip2612: true,
    tags: ['tokens'],
  },
  {
    symbol: 'FRAX',
    name: 'Frax',
    decimals: 18,
    address: '0x17fc002b466eec40dae837fc4be5c67993ddbd6f',
    logoURI:
      'https://tokens.1inch.io/0x17fc002b466eec40dae837fc4be5c67993ddbd6f.png',
    eip2612: true,
    tags: ['tokens'],
  },
  {
    symbol: 'STG',
    name: 'StargateToken',
    decimals: 18,
    address: '0x6694340fc020c5e6b96567843da2df01b2ce1eb6',
    logoURI:
      'https://tokens.1inch.io/0x6694340fc020c5e6b96567843da2df01b2ce1eb6.png',
    tags: ['tokens'],
  },
  {
    symbol: 'RDNT',
    name: 'Radiant',
    decimals: 18,
    address: '0x0c4681e6c0235179ec3d4f4fc4df3d14fdd96017',
    logoURI:
      'https://tokens.1inch.io/0x0c4681e6c0235179ec3d4f4fc4df3d14fdd96017.png',
    tags: ['tokens'],
  },
  {
    symbol: 'LIQD',
    name: 'Liquid',
    decimals: 18,
    address: '0x93c15cd7de26f07265f0272e0b831c5d7fab174f',
    logoURI:
      'https://tokens.1inch.io/0x93c15cd7de26f07265f0272e0b831c5d7fab174f.png',
    tags: ['tokens'],
  },
  {
    symbol: 'HOP',
    name: 'Hop',
    decimals: 18,
    address: '0xc5102fe9359fd9a28f877a67e36b0f050d81a3cc',
    logoURI:
      'https://tokens.1inch.io/0xc5102fe9359fd9a28f877a67e36b0f050d81a3cc.png',
    eip2612: true,
    tags: ['tokens'],
  },
  {
    symbol: 'wstETH',
    name: 'Wrapped liquid staked Ether 2.0',
    decimals: 18,
    address: '0x5979d7b546e38e414f7e9822514be443a4800529',
    logoURI:
      'https://tokens.1inch.io/0x5979d7b546e38e414f7e9822514be443a4800529.png',
    tags: ['tokens'],
  },
  {
    symbol: 'USDs',
    name: 'Sperax USD',
    decimals: 18,
    address: '0xd74f5255d557944cf7dd0e45ff521520002d5748',
    logoURI:
      'https://tokens.1inch.io/0xd74f5255d557944cf7dd0e45ff521520002d5748.png',
    eip2612: true,
    tags: ['tokens', 'PEG:USD'],
  },
  {
    symbol: 'agEUR',
    name: 'agEUR',
    decimals: 18,
    address: '0xfa5ed56a203466cbbc2430a43c66b9d8723528e7',
    logoURI:
      'https://tokens.1inch.io/0xfa5ed56a203466cbbc2430a43c66b9d8723528e7.png',
    eip2612: true,
    tags: ['tokens'],
  },
  {
    symbol: 'LDO',
    name: 'Lido DAO Token',
    decimals: 18,
    address: '0x13ad51ed4f1b7e9dc168d8a00cb3f4ddd85efa60',
    logoURI:
      'https://tokens.1inch.io/0x13ad51ed4f1b7e9dc168d8a00cb3f4ddd85efa60.png',
    eip2612: true,
    tags: ['tokens'],
  },
];
export default tokens;
