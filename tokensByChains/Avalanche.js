const tokens = [
  {
    symbol: 'AVAX',
    name: 'Avalanche',
    decimals: 18,
    address: '0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee',
    logoURI:
      'https://tokens.1inch.io/0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7.png',
    tags: ['native'],
  },
  {
    symbol: 'WETH.e',
    name: 'Wrapped Ether',
    decimals: 18,
    address: '0x49d5c2bdffac6ce2bfdb6640f4f80f226bc10bab',
    logoURI:
      'https://tokens.1inch.io/0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2.png',
    tags: ['tokens', 'PEG:ETH'],
  },
  {
    symbol: 'WAVAX',
    name: 'Wrapped AVAX',
    decimals: 18,
    address: '0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7',
    logoURI:
      'https://tokens.1inch.io/0xb31f66aa3c1e785363f0875a1b74e27b85fd66c7.png',
    wrappedNative: 'true',
    tags: ['tokens', 'PEG:AVAX'],
  },
  {
    symbol: 'USDC.e',
    name: 'USD Coin',
    decimals: 6,
    address: '0xa7d7079b0fead91f3e65f86e8915cb59c1a4c664',
    logoURI:
      'https://tokens.1inch.io/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png',
    tags: ['tokens', 'PEG:USD'],
  },
  {
    symbol: 'USDT.e',
    name: 'Tether USD',
    decimals: 6,
    address: '0xc7198437980c041c805a1edcba50c1ce5db95118',
    logoURI:
      'https://tokens.1inch.io/0xc7198437980c041c805a1edcba50c1ce5db95118.png',
    tags: ['tokens', 'PEG:USD'],
  },
  {
    symbol: 'WBTC.e',
    name: 'Wrapped BTC',
    decimals: 8,
    address: '0x50b7545627a5162f82a992c33b87adc75187b218',
    logoURI:
      'https://tokens.1inch.io/0x2260fac5e5542a773aa44fbcfedf7c193bc2c599.png',
    tags: ['tokens', 'PEG:BTC'],
  },
  {
    symbol: 'DAI.e',
    name: 'Dai Stablecoin',
    decimals: 18,
    address: '0xd586e7f844cea2f87f50152665bcbc2c279d8d70',
    logoURI:
      'https://tokens.1inch.io/0x6b175474e89094c44da98b954eedeac495271d0f.png',
    tags: ['tokens', 'PEG:USD'],
  },
  {
    symbol: 'avWETH',
    name: 'Aave Avalanche Market WETH',
    decimals: 18,
    address: '0x53f7c5869a859f0aec3d334ee8b4cf01e3492f21',
    logoURI:
      'https://tokens.1inch.io/0x030ba81f1c18d280636f32af80b9aad02cf0854e.png',
    eip2612: true,
    tags: ['tokens', 'PEG:ETH'],
  },
  {
    symbol: 'avDAI',
    name: 'Aave Avalanche Market DAI',
    decimals: 18,
    address: '0x47afa96cdc9fab46904a55a6ad4bf6660b53c38a',
    logoURI:
      'https://tokens.1inch.io/0x028171bca77440897b824ca71d1c56cac55b68a3.png',
    eip2612: true,
    tags: ['tokens', 'PEG:USD'],
  },
  {
    symbol: 'avUSDT',
    name: 'Aave Avalanche Market USDT',
    decimals: 6,
    address: '0x532e6537fea298397212f09a61e03311686f548e',
    logoURI:
      'https://tokens.1inch.io/0x3ed3b47dd13ec9a98b44e6204a523e766b225811.png',
    eip2612: true,
    tags: ['tokens', 'PEG:USD'],
  },
  {
    symbol: 'avUSDC',
    name: 'Aave Avalanche Market USDC',
    decimals: 6,
    address: '0x46a51127c3ce23fb7ab1de06226147f446e4a857',
    logoURI:
      'https://tokens.1inch.io/0xbcca60bb61934080951369a648fb03df4f96263c.png',
    eip2612: true,
    tags: ['tokens', 'PEG:USD'],
  },
  {
    symbol: 'AAVE.e',
    name: 'Aave Token',
    decimals: 18,
    address: '0x63a72806098bd3d9520cc43356dd78afe5d386d9',
    logoURI:
      'https://tokens.1inch.io/0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9.png',
    tags: ['tokens'],
  },
  {
    symbol: 'avAAVE',
    name: 'Aave Avalanche Market AAVE',
    decimals: 18,
    address: '0xd45b7c061016102f9fa220502908f2c0f1add1d7',
    logoURI:
      'https://tokens.1inch.io/0xffc97d72e13e01096502cb8eb52dee56f74dad7b.png',
    eip2612: true,
    tags: ['tokens'],
  },
  {
    symbol: 'avWBTC',
    name: 'Aave Avalanche Market WBTC',
    decimals: 8,
    address: '0x686bef2417b6dc32c50a3cbfbcc3bb60e1e9a15d',
    logoURI:
      'https://tokens.1inch.io/0x9ff58f4ffb29fa2266ab25e75e2a8b3503311656.png',
    eip2612: true,
    tags: ['tokens', 'PEG:BTC'],
  },
  {
    symbol: 'avWAVAX',
    name: 'Aave Avalanche Market WAVAX',
    decimals: 18,
    address: '0xdfe521292ece2a4f44242efbcd66bc594ca9714b',
    logoURI:
      'https://tokens.1inch.io/0xdfe521292ece2a4f44242efbcd66bc594ca9714b.png',
    eip2612: true,
    tags: ['tokens'],
  },
  {
    symbol: 'renBTC',
    name: 'renBTC',
    decimals: 8,
    address: '0xdbf31df14b66535af65aac99c32e9ea844e14501',
    logoURI:
      'https://tokens.1inch.io/0xeb4c2781e4eba804ce9a9803c67d0893436bb27d.png',
    tags: ['tokens', 'PEG:BTC'],
  },
  {
    symbol: 'PNG',
    name: 'Pangolin',
    decimals: 18,
    address: '0x60781c2586d68229fde47564546784ab3faca982',
    logoURI:
      'https://tokens.1inch.io/0x60781c2586d68229fde47564546784ab3faca982.png',
    eip2612: true,
    tags: ['tokens'],
  },
  {
    symbol: 'AVE',
    name: 'Avaware',
    decimals: 18,
    address: '0x78ea17559b3d2cf85a7f9c2c704eda119db5e6de',
    logoURI:
      'https://tokens.1inch.io/0x78ea17559b3d2cf85a7f9c2c704eda119db5e6de.png',
    tags: ['tokens'],
  },
  {
    symbol: 'YTS',
    name: 'YetiSwap',
    decimals: 18,
    address: '0x488f73cddda1de3664775ffd91623637383d6404',
    logoURI:
      'https://tokens.1inch.io/0x488f73cddda1de3664775ffd91623637383d6404.png',
    eip2612: true,
    tags: ['tokens'],
  },
  {
    symbol: 'SNOB',
    name: 'Snowball',
    decimals: 18,
    address: '0xc38f41a296a4493ff429f1238e030924a1542e50',
    logoURI:
      'https://tokens.1inch.io/0xc38f41a296a4493ff429f1238e030924a1542e50.png',
    tags: ['tokens'],
  },
  {
    symbol: 'SPORE',
    name: 'Spore.Finance',
    decimals: 9,
    address: '0x6e7f5c0b9f4432716bdd0a77a3601291b9d9e985',
    logoURI:
      'https://tokens.1inch.io/0x6e7f5c0b9f4432716bdd0a77a3601291b9d9e985.png',
    isFoT: true,
    tags: ['tokens'],
  },
  {
    symbol: 'PEFI',
    name: 'PenguinToken',
    decimals: 18,
    address: '0xe896cdeaac9615145c0ca09c8cd5c25bced6384c',
    logoURI:
      'https://tokens.1inch.io/0xe896cdeaac9615145c0ca09c8cd5c25bced6384c.png',
    tags: ['tokens'],
  },
  {
    symbol: 'LYD',
    name: 'LydiaFinance Token',
    decimals: 18,
    address: '0x4c9b4e1ac6f24cde3660d5e4ef1ebf77c710c084',
    logoURI:
      'https://tokens.1inch.io/0x4c9b4e1ac6f24cde3660d5e4ef1ebf77c710c084.png',
    tags: ['tokens'],
  },
  {
    symbol: 'VSO',
    name: 'VersoToken',
    decimals: 18,
    address: '0x846d50248baf8b7ceaa9d9b53bfd12d7d7fbb25a',
    logoURI:
      'https://tokens.1inch.io/0x846d50248baf8b7ceaa9d9b53bfd12d7d7fbb25a.png',
    tags: ['tokens'],
  },
  {
    symbol: 'AVME',
    name: 'AVME',
    decimals: 18,
    address: '0x1ecd47ff4d9598f89721a2866bfeb99505a413ed',
    logoURI:
      'https://tokens.1inch.io/0x1ecd47ff4d9598f89721a2866bfeb99505a413ed.png',
    tags: ['tokens'],
  },
  {
    symbol: 'HUSKY',
    name: 'Husky',
    decimals: 18,
    address: '0x65378b697853568da9ff8eab60c13e1ee9f4a654',
    logoURI:
      'https://tokens.1inch.io/0x65378b697853568da9ff8eab60c13e1ee9f4a654.png',
    tags: ['tokens'],
  },
  {
    symbol: 'XAVA',
    name: 'Avalaunch',
    decimals: 18,
    address: '0xd1c3f94de7e5b45fa4edbba472491a9f4b166fc4',
    logoURI:
      'https://tokens.1inch.io/0xd1c3f94de7e5b45fa4edbba472491a9f4b166fc4.png',
    tags: ['tokens'],
  },
  {
    symbol: 'DYP',
    name: 'DeFiYieldProtocol',
    decimals: 18,
    address: '0x961c8c0b1aad0c0b10a51fef6a867e3091bcef17',
    logoURI:
      'https://tokens.1inch.io/0x961c8c0b1aad0c0b10a51fef6a867e3091bcef17.png',
    tags: ['tokens'],
  },
  {
    symbol: 'BNB',
    name: 'Binance',
    decimals: 18,
    address: '0x264c1383ea520f73dd837f915ef3a732e204a493',
    logoURI:
      'https://tokens.1inch.io/0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c.png',
    eip2612: true,
    tags: ['tokens', 'PEG:BNB'],
  },
  {
    symbol: 'WET',
    name: 'Weble Ecosystem Token',
    decimals: 18,
    address: '0xb1466d4cf0dcfc0bcddcf3500f473cdacb88b56d',
    logoURI:
      'https://tokens.1inch.io/0xb1466d4cf0dcfc0bcddcf3500f473cdacb88b56d.png',
    tags: ['tokens'],
  },
  {
    symbol: 'YAK',
    name: 'Yak Token',
    decimals: 18,
    address: '0x59414b3089ce2af0010e7523dea7e2b35d776ec7',
    logoURI:
      'https://tokens.1inch.io/0x59414b3089ce2af0010e7523dea7e2b35d776ec7.png',
    eip2612: true,
    tags: ['tokens'],
  },
  {
    symbol: 'QI',
    name: 'BENQI',
    decimals: 18,
    address: '0x8729438eb15e2c8b576fcc6aecda6a148776c0f5',
    logoURI:
      'https://tokens.1inch.io/0x8729438eb15e2c8b576fcc6aecda6a148776c0f5.png',
    eip2612: true,
    tags: ['tokens'],
  },
  {
    symbol: 'JOE',
    name: 'JoeToken',
    decimals: 18,
    address: '0x6e84a6216ea6dacc71ee8e6b0a5b7322eebc0fdd',
    logoURI:
      'https://tokens.1inch.io/0x6e84a6216ea6dacc71ee8e6b0a5b7322eebc0fdd.png',
    tags: ['tokens'],
  },
  {
    symbol: 'ELK',
    name: 'Elk',
    decimals: 18,
    address: '0xe1c110e1b1b4a1ded0caf3e42bfbdbb7b5d7ce1c',
    logoURI:
      'https://tokens.1inch.io/0xe1c110e1b1b4a1ded0caf3e42bfbdbb7b5d7ce1c.png',
    eip2612: true,
    tags: ['tokens'],
  },
  {
    symbol: 'SHIBX',
    name: 'SHIBAVAX',
    decimals: 18,
    address: '0x440abbf18c54b2782a4917b80a1746d3a2c2cce1',
    logoURI:
      'https://tokens.1inch.io/0x440abbf18c54b2782a4917b80a1746d3a2c2cce1.png',
    isFoT: true,
    tags: ['tokens'],
  },
  {
    symbol: 'SWAP.e',
    name: 'TrustSwap Token',
    decimals: 18,
    address: '0xc7b5d72c836e718cda8888eaf03707faef675079',
    logoURI:
      'https://tokens.1inch.io/0xcc4304a31d09258b0029ea7fe63d032f52e44efe.png',
    tags: ['tokens'],
  },
  {
    symbol: 'YAY',
    name: 'YAY Games',
    decimals: 18,
    address: '0x01c2086facfd7aa38f69a6bd8c91bef3bb5adfca',
    logoURI:
      'https://tokens.1inch.io/0x01c2086facfd7aa38f69a6bd8c91bef3bb5adfca.png',
    tags: ['tokens'],
  },
  {
    symbol: 'TIME',
    name: 'Time',
    decimals: 9,
    address: '0xb54f16fb19478766a268f172c9480f8da1a7c9c3',
    logoURI:
      'https://tokens.1inch.io/0x485d17a6f1b8780392d53d64751824253011a260.png',
    eip2612: true,
    tags: ['tokens'],
  },
  {
    symbol: 'APEIN',
    name: 'Ape In',
    decimals: 18,
    address: '0x938fe3788222a74924e062120e7bfac829c719fb',
    logoURI:
      'https://tokens.1inch.io/0x938fe3788222a74924e062120e7bfac829c719fb.png',
    tags: ['tokens'],
  },
  {
    symbol: 'APE-X',
    name: 'Ape-X',
    decimals: 9,
    address: '0xd039c9079ca7f2a87d632a9c0d7cea0137bacfb5',
    logoURI:
      'https://tokens.1inch.io/0xd039c9079ca7f2a87d632a9c0d7cea0137bacfb5.png',
    tags: ['tokens'],
  },
  {
    symbol: 'SPELL',
    name: 'Spell Token',
    decimals: 18,
    address: '0xce1bffbd5374dac86a2893119683f4911a2f7814',
    logoURI:
      'https://tokens.1inch.io/0x090185f2135308bad17527004364ebcc2d37e5f6.png',
    eip2612: true,
    tags: ['tokens'],
  },
  {
    symbol: 'KLO',
    name: 'Kalao Token',
    decimals: 18,
    address: '0xb27c8941a7df8958a1778c0259f76d1f8b711c35',
    logoURI:
      'https://tokens.1inch.io/0xb27c8941a7df8958a1778c0259f76d1f8b711c35.png',
    tags: ['tokens'],
  },
  {
    symbol: 'AMPL',
    name: 'Ampleforth secured by Meter Passport',
    decimals: 9,
    address: '0x027dbca046ca156de9622cd1e2d907d375e53aa7',
    logoURI:
      'https://tokens.1inch.io/0xd46ba6d942050d489dbd938a2c909a5d5039a161.png',
    eip2612: true,
    tags: ['tokens'],
  },
  {
    symbol: 'INSUR',
    name: 'InsurAce',
    decimals: 18,
    address: '0x544c42fbb96b39b21df61cf322b5edc285ee7429',
    logoURI:
      'https://tokens.1inch.io/0x544c42fbb96b39b21df61cf322b5edc285ee7429.png',
    tags: ['tokens'],
  },
  {
    symbol: 'BOOFI',
    name: 'Boo Finance Token',
    decimals: 18,
    address: '0xb00f1ad977a949a3ccc389ca1d1282a2946963b0',
    logoURI:
      'https://tokens.1inch.io/0xb00f1ad977a949a3ccc389ca1d1282a2946963b0.png',
    eip2612: true,
    tags: ['tokens'],
  },
  {
    symbol: 'FXS',
    name: 'Frax Share',
    decimals: 18,
    address: '0x214db107654ff987ad859f34125307783fc8e387',
    logoURI:
      'https://tokens.1inch.io/0x3432b6a60d23ca0dfca7761b7ab56459d9c964d0.png',
    eip2612: true,
    tags: ['tokens'],
  },
  {
    symbol: 'ROCO',
    name: 'ROCO',
    decimals: 18,
    address: '0xb2a85c5ecea99187a977ac34303b80acbddfa208',
    logoURI:
      'https://tokens.1inch.io/0xb2a85c5ecea99187a977ac34303b80acbddfa208.png',
    tags: ['tokens'],
  },
  {
    symbol: 'OH',
    name: 'Oh! Finance',
    decimals: 18,
    address: '0x937e077abaea52d3abf879c9b9d3f2ebd15baa21',
    logoURI:
      'https://tokens.1inch.io/0x937e077abaea52d3abf879c9b9d3f2ebd15baa21.png',
    eip2612: true,
    tags: ['tokens'],
  },
  {
    symbol: 'CRA',
    name: 'CRA',
    decimals: 18,
    address: '0xa32608e873f9ddef944b24798db69d80bbb4d1ed',
    logoURI:
      'https://tokens.1inch.io/0xa32608e873f9ddef944b24798db69d80bbb4d1ed.png',
    eip2612: true,
    tags: ['tokens'],
  },
  {
    symbol: 'JEWEL',
    name: 'Jewels',
    decimals: 18,
    address: '0x4f60a160d8c2dddaafe16fcc57566db84d674bd6',
    logoURI:
      'https://tokens.1inch.io/0x4f60a160d8c2dddaafe16fcc57566db84d674bd6.png',
    eip2612: true,
    tags: ['tokens'],
  },
  {
    symbol: 'CRAFT',
    name: 'CRAFT',
    decimals: 18,
    address: '0x8ae8be25c23833e0a01aa200403e826f611f9cd2',
    logoURI:
      'https://tokens.1inch.io/0x8ae8be25c23833e0a01aa200403e826f611f9cd2.png',
    tags: ['tokens'],
  },
  {
    symbol: 'gOHM',
    name: 'Governance OHM',
    decimals: 18,
    address: '0x321e7092a180bb43555132ec53aaa65a5bf84251',
    logoURI:
      'https://tokens.1inch.io/0x321e7092a180bb43555132ec53aaa65a5bf84251.png',
    eip2612: true,
    tags: ['tokens'],
  },
  {
    symbol: 'COOK',
    name: 'Poly-Peg COOK',
    decimals: 18,
    address: '0x637afeff75ca669ff92e4570b14d6399a658902f',
    logoURI:
      'https://tokens.1inch.io/0xff75ced57419bcaebe5f05254983b013b0646ef5.png',
    tags: ['tokens'],
  },
  {
    symbol: 'CLY',
    name: 'Colony Token',
    decimals: 18,
    address: '0xec3492a2508ddf4fdc0cd76f31f340b30d1793e6',
    logoURI:
      'https://tokens.1inch.io/0xec3492a2508ddf4fdc0cd76f31f340b30d1793e6.png',
    eip2612: true,
    tags: ['tokens'],
  },
  {
    symbol: 'iDYP',
    name: 'iDeFiYieldProtocol',
    decimals: 18,
    address: '0xbd100d061e120b2c67a24453cf6368e63f1be056',
    logoURI:
      'https://tokens.1inch.io/0xbd100d061e120b2c67a24453cf6368e63f1be056.png',
    tags: ['tokens'],
  },
  {
    symbol: 'PTP',
    name: 'Platypus',
    decimals: 18,
    address: '0x22d4002028f537599be9f666d1c4fa138522f9c8',
    logoURI:
      'https://tokens.1inch.io/0x22d4002028f537599be9f666d1c4fa138522f9c8.png',
    eip2612: true,
    tags: ['tokens'],
  },
  {
    symbol: 'RACEX',
    name: 'RaceX',
    decimals: 18,
    address: '0x7086e045b78e1e72f741f25231c08d238812cf8a',
    logoURI:
      'https://tokens.1inch.io/0x7086e045b78e1e72f741f25231c08d238812cf8a.png',
    tags: ['tokens'],
  },
  {
    symbol: 'LVT',
    name: 'Louverture',
    decimals: 18,
    address: '0xff579d6259dedcc80488c9b89d2820bcb5609160',
    logoURI:
      'https://tokens.1inch.io/0xff579d6259dedcc80488c9b89d2820bcb5609160.png',
    tags: ['tokens'],
  },
  {
    symbol: 'SMRTr',
    name: 'SmarterCoin',
    decimals: 18,
    address: '0x6d923f688c7ff287dc3a5943caeefc994f97b290',
    logoURI:
      'https://tokens.1inch.io/0x6d923f688c7ff287dc3a5943caeefc994f97b290.png',
    tags: ['tokens'],
  },
  {
    symbol: 'BLZZ',
    name: 'Blizz.Finance Protocol Token',
    decimals: 18,
    address: '0x0f34919404a290e71fc6a510cb4a6acb8d764b24',
    logoURI:
      'https://tokens.1inch.io/0x0f34919404a290e71fc6a510cb4a6acb8d764b24.png',
    tags: ['tokens'],
  },
  {
    symbol: 'SYN',
    name: 'Synapse',
    decimals: 18,
    address: '0x1f1e7c893855525b303f99bdf5c3c05be09ca251',
    logoURI:
      'https://tokens.1inch.io/0x1f1e7c893855525b303f99bdf5c3c05be09ca251_1.png',
    eip2612: true,
    tags: ['tokens'],
  },
  {
    symbol: 'THOR',
    name: 'THOR v2',
    decimals: 18,
    address: '0x8f47416cae600bccf9530e9f3aeaa06bdd1caa79',
    logoURI:
      'https://tokens.1inch.io/0x8f47416cae600bccf9530e9f3aeaa06bdd1caa79.png',
    tags: ['tokens'],
  },
  {
    symbol: 'MELT',
    name: 'Defrost Finance Token',
    decimals: 18,
    address: '0x47eb6f7525c1aa999fbc9ee92715f5231eb1241d',
    logoURI:
      'https://tokens.1inch.io/0x47eb6f7525c1aa999fbc9ee92715f5231eb1241d.png',
    tags: ['tokens'],
  },
  {
    symbol: 'ALPHA.e',
    name: 'AlphaToken',
    decimals: 18,
    address: '0x2147efff675e4a4ee1c2f918d181cdbd7a8e208f',
    logoURI:
      'https://tokens.1inch.io/0xa1faa113cbe53436df28ff0aee54275c13b40975.png',
    tags: ['tokens'],
  },
  {
    symbol: 'TUS',
    name: 'Treasure Under Sea',
    decimals: 18,
    address: '0xf693248f96fe03422fea95ac0afbbbc4a8fdd172',
    logoURI:
      'https://tokens.1inch.io/0xf693248f96fe03422fea95ac0afbbbc4a8fdd172.png',
    tags: ['tokens'],
  },
  {
    symbol: 'IME',
    name: 'Imperium Empires Token',
    decimals: 18,
    address: '0xf891214fdcf9cdaa5fdc42369ee4f27f226adad6',
    logoURI:
      'https://tokens.1inch.io/0xf891214fdcf9cdaa5fdc42369ee4f27f226adad6.png',
    tags: ['tokens'],
  },
  {
    symbol: 'PENDLE',
    name: 'Pendle',
    decimals: 18,
    address: '0xfb98b335551a418cd0737375a2ea0ded62ea213b',
    logoURI:
      'https://tokens.1inch.io/0x808507121b80c02388fad14726482e061b8da827.png',
    eip2612: true,
    tags: ['tokens'],
  },
  {
    symbol: 'DON',
    name: 'Dogeon Token',
    decimals: 18,
    address: '0x1db749847c4abb991d8b6032102383e6bfd9b1c7',
    logoURI: 'https://snowtrace.io/token/images/dogeon_32.png',
    tags: ['tokens'],
  },
  {
    symbol: 'ISA',
    name: 'Islander',
    decimals: 18,
    address: '0x3eefb18003d033661f84e48360ebecd181a84709',
    logoURI: 'https://snowtrace.io/token/images/theislander_32.png',
    tags: ['tokens'],
  },
  {
    symbol: 'MAGE',
    name: 'MetaBrands',
    decimals: 18,
    address: '0x921f99719eb6c01b4b8f0ba7973a7c24891e740a',
    logoURI:
      'https://tokens.1inch.io/0x921f99719eb6c01b4b8f0ba7973a7c24891e740a.png',
    eip2612: true,
    tags: ['tokens'],
  },
  {
    symbol: 'PLN',
    name: 'Pollen',
    decimals: 18,
    address: '0x7b2b702706d9b361dfe3f00bd138c0cfda7fb2cf',
    logoURI: 'https://snowtrace.io/token/images/pollendefi_32.png',
    tags: ['tokens'],
  },
  {
    symbol: 'EGG',
    name: 'chikn egg',
    decimals: 18,
    address: '0x7761e2338b35bceb6bda6ce477ef012bde7ae611',
    logoURI: 'https://snowtrace.io/token/images/chikneeg_32.png',
    tags: ['tokens'],
  },
  {
    symbol: 'DCAU',
    name: 'Dragon Crypto Aurum',
    decimals: 18,
    address: '0x100cc3a819dd3e8573fd2e46d1e66ee866068f30',
    logoURI:
      'https://tokens.1inch.io/0x100cc3a819dd3e8573fd2e46d1e66ee866068f30.png',
    tags: ['tokens'],
  },
  {
    symbol: 'BUSD.e',
    name: 'Binance USD',
    decimals: 18,
    address: '0x19860ccb0a68fd4213ab9d8266f7bbf05a8dde98',
    logoURI:
      'https://tokens.1inch.io/0x4fabb145d64652a948d72533023f6e7a623c7c53.png',
    tags: ['tokens', 'PEG:USD'],
  },
  {
    symbol: 'LINK.e',
    name: 'Chainlink Token',
    decimals: 18,
    address: '0x5947bb275c521040051d82396192181b413227a3',
    logoURI:
      'https://tokens.1inch.io/0x697256caa3ccafd62bb6d3aa1c7c5671786a5fd9.png',
    tags: ['tokens'],
  },
  {
    symbol: 'SUSHI.e',
    name: 'SushiToken',
    decimals: 18,
    address: '0x37b608519f91f70f2eeb0e5ed9af4061722e4f76',
    logoURI:
      'https://tokens.1inch.io/0x6b3595068778dd592e39a122f4f5a5cf09c90fe2.png',
    tags: ['tokens'],
  },
  {
    symbol: 'WOO.e',
    name: 'Wootrade Network',
    decimals: 18,
    address: '0xabc9547b534519ff73921b1fba6e672b5f58d083',
    logoURI: 'https://snowtrace.io/token/images/wootradenetwork_32.png',
    tags: ['tokens'],
  },
  {
    symbol: 'TRYB',
    name: 'BiLira',
    decimals: 6,
    address: '0x564a341df6c126f90cf3ecb92120fd7190acb401',
    logoURI:
      'https://tokens.1inch.io/0x2c537e5624e4af88a7ae4060c022609376c8d0eb.png',
    tags: ['tokens'],
  },
  {
    symbol: 'TSD',
    name: 'TSD Stablecoin',
    decimals: 18,
    address: '0x4fbf0429599460d327bd5f55625e30e4fc066095',
    logoURI: 'https://snowtrace.io/token/images/teddy-tsd_32.png',
    eip2612: true,
    tags: ['tokens', 'PEG:USD'],
  },
  {
    symbol: 'MIM',
    name: 'Magic Internet Money',
    decimals: 18,
    address: '0x130966628846bfd36ff31a822705796e8cb8c18d',
    logoURI: 'https://snowtrace.io/token/images/mimstablecoin_32.png',
    eip2612: true,
    tags: ['tokens'],
  },
  {
    symbol: 'AVAI',
    name: 'AVAI',
    decimals: 18,
    address: '0x346a59146b9b4a77100d369a3d18e8007a9f46a6',
    logoURI: 'https://s2.coinmarketcap.com/static/img/coins/64x64/12500.png',
    eip2612: true,
    tags: ['tokens'],
  },
  {
    symbol: 'FRAX',
    name: 'Frax',
    decimals: 18,
    address: '0xd24c2ad096400b6fbcd2ad8b24e7acbc21a1da64',
    logoURI:
      'https://tokens.1inch.io/0x853d955acef822db058eb8505911ed77f175b99e.png',
    eip2612: true,
    tags: ['tokens'],
  },
  {
    symbol: 'H2O',
    name: 'Defrost Finance H2O',
    decimals: 18,
    address: '0x026187bdbc6b751003517bcb30ac7817d5b766f8',
    logoURI: 'https://snowtrace.io/token/images/defrostfinance_32.png',
    tags: ['tokens'],
  },
  {
    symbol: 'USDC',
    name: 'USD Coin',
    decimals: 6,
    address: '0xb97ef9ef8734c71904d8002f8b6bc66dd9c48a6e',
    logoURI:
      'https://tokens.1inch.io/0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48.png',
    tags: ['tokens', 'PEG:USD'],
  },
  {
    symbol: 'AXIAL',
    name: 'AxialToken',
    decimals: 18,
    address: '0xcf8419a615c57511807236751c0af38db4ba3351',
    logoURI:
      'https://tokens.1inch.io/0xcf8419a615c57511807236751c0af38db4ba3351.png',
    tags: ['tokens'],
  },
  {
    symbol: 'TUSD',
    name: 'TrueUSD',
    decimals: 18,
    address: '0x1c20e891bab6b1727d14da358fae2984ed9b59eb',
    logoURI:
      'https://tokens.1inch.io/0x1c20e891bab6b1727d14da358fae2984ed9b59eb.png',
    tags: ['tokens', 'PEG:USD'],
  },
  {
    symbol: 'WXT',
    name: 'Wirex Token',
    decimals: 18,
    address: '0xfcde4a87b8b6fa58326bb462882f1778158b02f1',
    logoURI:
      'https://tokens.1inch.io/0xfcde4a87b8b6fa58326bb462882f1778158b02f1.png',
    tags: ['tokens'],
  },
  {
    symbol: 'GMX',
    name: 'GMX',
    decimals: 18,
    address: '0x62edc0692bd897d2295872a9ffcac5425011c661',
    logoURI:
      'https://tokens.1inch.io/0x62edc0692bd897d2295872a9ffcac5425011c661.png',
    tags: ['tokens'],
  },
  {
    symbol: 'deUSDC',
    name: 'deBridge USD Coin',
    decimals: 6,
    address: '0x28690ec942671ac8d9bc442b667ec338ede6dfd3',
    logoURI:
      'https://tokens.1inch.io/0x28690ec942671ac8d9bc442b667ec338ede6dfd3.png',
    tags: ['tokens', 'PEG:USD'],
  },
  {
    symbol: 'USDt',
    name: 'TetherToken',
    decimals: 6,
    address: '0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7',
    logoURI:
      'https://tokens.1inch.io/0x9702230a8ea53601f5cd2dc00fdbc13d4df4a8c7.png',
    eip2612: true,
    tags: ['tokens', 'PEG:USD'],
  },
  {
    symbol: 'TIC',
    name: 'ElasticSwap Tic Token',
    decimals: 18,
    address: '0x75739a693459f33b1fbcc02099eea3ebcf150cbe',
    logoURI:
      'https://tokens.1inch.io/0x75739a693459f33b1fbcc02099eea3ebcf150cbe.png',
    tags: ['tokens'],
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
    symbol: 'BTC.b',
    name: 'Bitcoin',
    decimals: 8,
    address: '0x152b9d0fdc40c096757f570a51e494bd4b943e50',
    logoURI:
      'https://tokens.1inch.io/0x152b9d0fdc40c096757f570a51e494bd4b943e50.png',
    tags: ['tokens', 'PEG:BTC'],
  },
  {
    symbol: 'STG',
    name: 'StargateToken',
    decimals: 18,
    address: '0x2f6f07cdcf3588944bf4c42ac74ff24bf56e7590',
    logoURI:
      'https://tokens.1inch.io/0x2f6f07cdcf3588944bf4c42ac74ff24bf56e7590.png',
    tags: ['tokens'],
  },
  {
    symbol: 'POPS',
    name: 'POPSToken',
    decimals: 18,
    address: '0x240248628b7b6850352764c5dfa50d1592a033a8',
    logoURI:
      'https://tokens.1inch.io/0x240248628b7b6850352764c5dfa50d1592a033a8.png',
    tags: ['tokens'],
  },
  {
    symbol: 'YUSD',
    name: 'YUSD Stablecoin',
    decimals: 18,
    address: '0x111111111111ed1d73f860f57b2798b683f2d325',
    logoURI:
      'https://tokens.1inch.io/0x111111111111ed1d73f860f57b2798b683f2d325.png',
    eip2612: true,
    tags: ['tokens', 'PEG:USD'],
  },
  {
    symbol: 'FEED',
    name: 'chikn feed',
    decimals: 18,
    address: '0xab592d197acc575d16c3346f4eb70c703f308d1e',
    logoURI:
      'https://tokens.1inch.io/0xab592d197acc575d16c3346f4eb70c703f308d1e.png',
    tags: ['tokens'],
  },
  {
    symbol: 'CHRO',
    name: 'Chronicum',
    decimals: 18,
    address: '0xbf1230bb63bfd7f5d628ab7b543bcefa8a24b81b',
    logoURI:
      'https://tokens.1inch.io/0xbf1230bb63bfd7f5d628ab7b543bcefa8a24b81b.png',
    eip2612: true,
    tags: ['tokens'],
  },
  {
    symbol: 'WLRS',
    name: 'frozenwalrus.finance',
    decimals: 18,
    address: '0x395908aeb53d33a9b8ac35e148e9805d34a555d3',
    logoURI:
      'https://tokens.1inch.io/0x395908aeb53d33a9b8ac35e148e9805d34a555d3.png',
    tags: ['tokens'],
  },
  {
    symbol: 'WSHARE',
    name: 'Frozen Walrus Share',
    decimals: 18,
    address: '0xe6d1afea0b76c8f51024683dd27fa446ddaf34b6',
    logoURI:
      'https://tokens.1inch.io/0xe6d1afea0b76c8f51024683dd27fa446ddaf34b6.png',
    tags: ['tokens'],
  },
  {
    symbol: 'AVABBC',
    name: 'Avalanche ABBC',
    decimals: 8,
    address: '0xe83ce6bfb580583bd6a62b4be7b34fc25f02910d',
    logoURI:
      'https://tokens.1inch.io/0xe83ce6bfb580583bd6a62b4be7b34fc25f02910d.png',
    tags: ['tokens'],
  },
  {
    symbol: 'SOL',
    name: 'Wrapped SOL',
    decimals: 9,
    address: '0xfe6b19286885a4f7f55adad09c3cd1f906d2478f',
    logoURI:
      'https://tokens.1inch.io/0xfe6b19286885a4f7f55adad09c3cd1f906d2478f.png',
    tags: ['tokens'],
  },
  {
    symbol: 'DOMI',
    name: 'Domi',
    decimals: 18,
    address: '0xfc6da929c031162841370af240dec19099861d3b',
    logoURI:
      'https://tokens.1inch.io/0xfc6da929c031162841370af240dec19099861d3b.png',
    tags: ['tokens'],
  },
  {
    symbol: 'NXUSD',
    name: 'NXUSD',
    decimals: 18,
    address: '0xf14f4ce569cb3679e99d5059909e23b07bd2f387',
    logoURI:
      'https://tokens.1inch.io/0xf14f4ce569cb3679e99d5059909e23b07bd2f387.png',
    eip2612: true,
    tags: ['tokens'],
  },
  {
    symbol: 'HON',
    name: 'HonToken',
    decimals: 18,
    address: '0xed2b42d3c9c6e97e11755bb37df29b6375ede3eb',
    logoURI:
      'https://tokens.1inch.io/0xed2b42d3c9c6e97e11755bb37df29b6375ede3eb.png',
    tags: ['tokens'],
  },
  {
    symbol: 'agEUR',
    name: 'agEUR',
    decimals: 18,
    address: '0xaec8318a9a59baeb39861d10ff6c7f7bf1f96c57',
    logoURI:
      'https://tokens.1inch.io/0xaec8318a9a59baeb39861d10ff6c7f7bf1f96c57.png',
    eip2612: true,
    tags: ['tokens'],
  },
  {
    symbol: 'RISE',
    name: 'EverRise',
    decimals: 18,
    address: '0xc17c30e98541188614df99239cabd40280810ca3',
    logoURI:
      'https://tokens.1inch.io/0xc17c30e98541188614df99239cabd40280810ca3.png',
    eip2612: true,
    tags: ['tokens'],
  },
  {
    symbol: 'BOG',
    name: 'Bogged Finance',
    decimals: 18,
    address: '0xb09fe1613fe03e7361319d2a43edc17422f36b09',
    logoURI:
      'https://tokens.1inch.io/0xb09fe1613fe03e7361319d2a43edc17422f36b09.png',
    tags: ['tokens'],
  },
  {
    symbol: 'NEWO',
    name: 'New Order',
    decimals: 18,
    address: '0x4bfc90322dd638f81f034517359bd447f8e0235a',
    logoURI:
      'https://tokens.1inch.io/0x4bfc90322dd638f81f034517359bd447f8e0235a.png',
    eip2612: true,
    tags: ['tokens'],
  },
  {
    symbol: 'NFTD',
    name: 'NFTrade Token [via ChainPort.io]',
    decimals: 18,
    address: '0x9e3ca00f2d4a9e5d4f0add0900de5f15050812cf',
    logoURI:
      'https://tokens.1inch.io/0x9e3ca00f2d4a9e5d4f0add0900de5f15050812cf.png',
    tags: ['tokens'],
  },
  {
    symbol: 'BAY',
    name: 'BAYMAX',
    decimals: 18,
    address: '0x18706c65b12595edb43643214eacdb4f618dd166',
    logoURI:
      'https://tokens.1inch.io/0x18706c65b12595edb43643214eacdb4f618dd166.png',
    tags: ['tokens'],
  },
];
export default tokens;
