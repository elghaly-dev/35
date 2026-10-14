(function () {
  var EN = {
    skip: "Skip to content",
    h1: "35",
    kicker: "Closed desk \u00b7 not a public app",
    lede: "35 is a private earned-credit ledger for this desk. There is no public bot to click, no coin to buy, no deposit to send. Follow the record. Mail if you must. Mint stays unpublished until the desk\u2019s realized earnings cover its rent.",
    record: "Public record",
    c1t: "Closed", c1p: "The sniper and flash are not a public product.",
    c2t: "Earned, not bought", c2p: "Credit later comes from signed desk-usage memos. Nobody buys 35.",
    c3t: "Not a listing", c3p: "No pool today. Do not look for a contract to ape.",
    doorst: "Doors",
    door1n: "Iris \u00b7 free glass",
    door1p: "A free glass door. Not 35 credits \u2014 just a window into the work.",
    door2n: "Plumb \u00b7 ready desk seats",
    door2p: "Ready desk seats when the desk opens them. No price here \u2014 follow the door.",
    locked: "Locked",
    lockedp: "Path A. Closed desk. No purchase. No redeem. No public app.",
    addr: "Addresses", mode: "Mode", support: "Support", mint: "Mint", pool: "Pool", mail: "Mail",
    askt: "Ask 35",
    askp: "You get an instant answer here. The same question is also sent to 35@elghaly.dev so the desk can reply.",
    askPlaceholder: "Ask 35",
    askBtn: "Answer",
    mailBtn: "Mail the desk",
    askNote: "Answers come from this page. <b>Answer</b> also sends your question to 35@elghaly.dev through formsubmit.co.",
    termst: "Terms",
    t1: "Earned, not bought. 35 is never sold. No presale, no public sale, no purchase of any kind.",
    t2: "No deposits. Nobody sends SOL or USDC to a 35 address in exchange for credit.",
    t3: "No redemption. Credit is not redeemable for cash, SOL, or USDC. There is no redemption desk.",
    t4: "Not equity. Not a SAFE, note, or claim on any company. Not a promise of returns or buyback. Not a deposit receipt.",
    t5: "A credit comes into being when an allowlisted desk signer lands a signed memo for work published in the earn schedule, and in no other way.",
    t6: "Supply at mint is the credit ledger total. It is derived from signed memos, never an invented number.",
    termsn: "Full rules, kill list, and earn schedule are in the public record at github.com/elghaly-dev/35.",
    earnt: "Earn schedule", earnwhat: "What earns a credit", earncredit: "Credit",
    earnp: "A rate that is not on this table cannot be issued \u2014 the issuer refuses it and the mint gate fails the ledger. Rates may change; already-issued credits keep the rate they were issued at.",
    credt: "What a credit is for",
    cred1: "Today \u2014 nothing spendable. A credit is a signed ledger row proving the desk recorded work at the published rate. It does not entitle anyone to tokens, cash, SOL, or USDC right now. Mint unpublished. No pool.",
    cred2: "Later \u2014 when all of these hold: the desk\u2019s realized earnings cover rent, the ledger reconciles, gate.js prints PASS, and the owner explicitly says mint: each credit may convert 1:1 to one unit of 35 at six decimals in a single mint event. Supply equals the ledger total from signed memos \u2014 never invented. Until then, credits stay credits.",
    cred3: "Never \u2014 35 is not sold. Nobody buys credit with SOL or USDC. Not redeemable for cash or crypto. Not equity, not a deposit receipt, not a promise of returns or buyback. If the gate never passes, credits remain credits.",
    ledt: "Ledger",
    onChain: "On chain", inLedger: "In ledger", missing: "Missing", entries: "Entries", total: "Total", lastRec: "Last reconcile",
    ledgerNote: "A point-in-time snapshot, not updated as the desk runs: the last reconcile run on the desk box (2026-09-17, week 2026-W38). This page reads <a href=\"/ledger-snapshot.json\">ledger-snapshot.json</a> and does not recompute the ledger. Mint stays unpublished.",
    ledgerNoteFail: "The ledger snapshot could not be read, so no ledger state is shown. Mint stays unpublished.",
    addrNote: "Memo signer / treasury. Do not send deposits. KEEP \u00b7 350 \u00b7 cheap_* stay off this page.",
    footerDream: "\ud83d\udcad you dream we build \ud83e\udde0\ud83d\udca1",
    footerMade: "made by love \u2764\ufe0f",
    footerContact: "Email first: support@elghaly.dev. Calls only by appointment.",
    snapshotUnavailable: "snapshot unavailable"
  };

  function clone(base, overrides) {
    var o = {};
    var k;
    for (k in base) if (Object.prototype.hasOwnProperty.call(base, k)) o[k] = base[k];
    for (k in overrides) if (Object.prototype.hasOwnProperty.call(overrides, k)) o[k] = overrides[k];
    return o;
  }

  var T = {
    en: EN,
    ar: clone(EN, {
      skip: "\u0627\u0646\u062a\u0642\u0644 \u0625\u0644\u0649 \u0627\u0644\u0645\u062d\u062a\u0648\u0649",
      kicker: "\u0645\u0643\u062a\u0628 \u0645\u063a\u0644\u0642 \u00b7 \u0644\u064a\u0633 \u062a\u0637\u0628\u064a\u0642\u064b\u0627 \u0639\u0627\u0645\u064b\u0627",
      lede: "35 \u062f\u0641\u062a\u0631 \u0627\u0633\u062a\u062d\u0642\u0627\u0642 \u062e\u0627\u0635 \u0645\u0646 \u0627\u0644\u0627\u0639\u062a\u0645\u0627\u062f \u0644\u0647\u0630\u0627 \u0627\u0644\u0645\u0643\u062a\u0628. \u0644\u0627 \u0628\u0648\u062a \u0639\u0627\u0645 \u060c \u0644\u0627 \u0639\u0645\u0644\u0629 \u0644\u0644\u0634\u0631\u0627\u0621 \u060c \u0648\u0644\u0627 \u0625\u064a\u062f\u0627\u0639 \u0644\u0644\u0625\u0631\u0633\u0627\u0644. \u0627\u062a\u0628\u0639 \u0627\u0644\u0633\u062c\u0644. \u0631\u0627\u0633\u0644 \u0628\u0631\u064a\u062f \u0625\u0646 \u0627\u0636\u0637\u0631\u062a. \u064a\u0628\u0642\u0649 \u0627\u0644\u0633\u0643 \u063a\u064a\u0631 \u0645\u0646\u0634\u0648\u0631 \u062d\u062a\u0649 \u062a\u063a\u0637\u064a \u0623\u0631\u0628\u0627\u062d \u0627\u0644\u0645\u0643\u062a\u0628 \u0627\u0644\u0645\u062d\u0642\u0642\u0629 \u0625\u064a\u062c\u0627\u0631\u0647.",
      c1t: "\u0645\u063a\u0644\u0642", c1p: "\u0627\u0644\u0642\u0646\u0627\u0635 \u0648\u0627\u0644\u0641\u0644\u0627\u0634 \u0644\u064a\u0633\u0627 \u0645\u0646\u062a\u062c\u064b\u0627 \u0639\u0627\u0645\u064b\u0627.",
      c2t: "\u0645\u0643\u062a\u0633\u0628 \u0644\u0627 \u0645\u0634\u062a\u0631\u0649", c2p: "\u0627\u0644\u0627\u0639\u062a\u0645\u0627\u062f \u064a\u0623\u062a\u064a \u0644\u0627\u062d\u0642\u064b\u0627 \u0645\u0646 \u0645\u064a\u0645\u0648\u0632\u0627\u062a \u0627\u0633\u062a\u062e\u062f\u0627\u0645 \u0645\u0648\u0642\u0639\u0629. \u0644\u0627 \u0623\u062d\u062f \u064a\u0634\u062a\u0631\u064a 35.",
      c3t: "\u0644\u064a\u0633 \u0625\u062f\u0631\u0627\u062c\u064b\u0627", c3p: "\u0644\u0627 \u062a\u062c\u0645\u0639\u0629 \u0627\u0644\u064a\u0648\u0645. \u0644\u0627 \u062a\u0628\u062d\u062b \u0639\u0646 \u0639\u0642\u062f \u0644\u0644\u0645\u0636\u0627\u0631\u0628\u0629.",
      doorst: "\u0623\u0628\u0648\u0627\u0628",
      door1n: "Iris \u00b7 \u0632\u062c\u0627\u062c \u0645\u062c\u0627\u0646\u064a",
      door1p: "\u0628\u0627\u0628 \u0632\u062c\u0627\u062c \u0645\u062c\u0627\u0646\u064a. \u0644\u064a\u0633 \u0627\u0639\u062a\u0645\u0627\u062f 35 \u2014 \u0646\u0627\u0641\u0630\u0629 \u0639\u0644\u0649 \u0627\u0644\u0639\u0645\u0644 \u0641\u0642\u0637.",
      door2n: "Plumb \u00b7 \u0645\u0642\u0627\u0639\u062f \u062c\u0627\u0647\u0632\u0629",
      door2p: "\u0645\u0642\u0627\u0639\u062f \u062c\u0627\u0647\u0632\u0629 \u0639\u0646\u062f\u0645\u0627 \u064a\u0641\u062a\u062d\u0647\u0627 \u0627\u0644\u0645\u0643\u062a\u0628. \u0644\u0627 \u0633\u0639\u0631 \u0647\u0646\u0627 \u2014 \u0627\u062a\u0628\u0639 \u0627\u0644\u0628\u0627\u0628.",
      askt: "\u0627\u0633\u0623\u0644 35",
      askp: "\u062a\u062d\u0635\u0644 \u0639\u0644\u0649 \u0625\u062c\u0627\u0628\u0629 \u0641\u0648\u0631\u064a\u0629 \u0647\u0646\u0627. \u064a\u064f\u0631\u0633\u0644 \u0646\u0641\u0633 \u0627\u0644\u0633\u0624\u0627\u0644 \u0623\u064a\u0636\u064b\u0627 \u0625\u0644\u0649 35@elghaly.dev.",
      askPlaceholder: "\u0627\u0633\u0623\u0644 35",
      askBtn: "\u0625\u062c\u0627\u0628\u0629",
      mailBtn: "\u0631\u0627\u0633\u0644 \u0627\u0644\u0645\u0643\u062a\u0628",
      locked: "\u0645\u0642\u0641\u0644", lockedp: "\u0627\u0644\u0645\u0633\u0627\u0631 A. \u0645\u0643\u062a\u0628 \u0645\u063a\u0644\u0642. \u0644\u0627 \u0634\u0631\u0627\u0621. \u0644\u0627 \u0627\u0633\u062a\u0628\u062f\u0627\u0644. \u0644\u0627 \u062a\u0637\u0628\u064a\u0642 \u0639\u0627\u0645.",
      termst: "\u0627\u0644\u0634\u0631\u0648\u0637",
      t1: "\u0645\u0643\u062a\u0633\u0628 \u0644\u0627 \u0645\u0634\u062a\u0631\u0649. \u0644\u0627 \u064a\u064f\u0628\u0627\u0639 35 \u0623\u0628\u062f\u064b\u0627. \u0644\u0627 \u0637\u0631\u062d \u0645\u0628\u0643\u0631 \u0648\u0644\u0627 \u0628\u064a\u0639 \u0639\u0627\u0645 \u0648\u0644\u0627 \u0634\u0631\u0627\u0621.",
      t2: "\u0644\u0627 \u0625\u064a\u062f\u0627\u0639\u0627\u062a. \u0644\u0627 \u0623\u062d\u062f \u064a\u0631\u0633\u0644 SOL \u0623\u0648 USDC \u0645\u0642\u0627\u0628\u0644 \u0627\u0639\u062a\u0645\u0627\u062f.",
      t3: "\u0644\u0627 \u0627\u0633\u062a\u0628\u062f\u0627\u0644. \u0627\u0644\u0627\u0639\u062a\u0645\u0627\u062f \u063a\u064a\u0631 \u0642\u0627\u0628\u0644 \u0644\u0644\u062a\u062d\u0648\u064a\u0644 \u0625\u0644\u0649 \u0646\u0642\u062f \u0623\u0648 SOL \u0623\u0648 USDC.",
      t4: "\u0644\u064a\u0633 \u062d\u0635\u0629. \u0644\u064a\u0633 \u0648\u0639\u062f\u064b\u0627 \u0628\u0639\u0648\u0627\u0626\u0645 \u0623\u0648 \u0625\u064a\u062c\u0627\u0628 \u0627\u0644\u0627\u0633\u062a\u062b\u0645\u0627\u0631 \u0641\u064a \u0623\u064a \u0634\u0631\u0643\u0629.",
      t5: "\u064a\u0646\u0634\u0623 \u0627\u0644\u0627\u0639\u062a\u0645\u0627\u062f \u0639\u0646\u062f\u0645\u0627 \u064a\u0648\u0642\u0651\u0639 \u0645\u0648\u0642\u0651\u0639 \u0645\u062e\u0648\u0651\u0644 \u0645\u064a\u0645\u0648\u064b\u0627 \u0644\u0639\u0645\u0644 \u0645\u0646\u0634\u0648\u0631 \u0641\u064a \u062c\u062f\u0648\u0644 \u0627\u0644\u0627\u0631\u0628\u0627\u062d \u0648\u0644\u0627 \u0628\u0623\u064a \u0637\u0631\u064a\u0642\u0629 \u0623\u062e\u0631\u0649.",
      t6: "\u0627\u0644\u0625\u0635\u062f\u0627\u0631 \u0639\u0646\u062f \u0627\u0644\u0633\u0643 \u0647\u0648 \u0625\u062c\u0645\u0627\u0644\u064a \u062f\u0641\u062a\u0631 \u0627\u0644\u0627\u0639\u062a\u0645\u0627\u062f \u2014 \u0645\u0634\u062a\u0642 \u0645\u0646 \u0645\u064a\u0645\u0648\u0632\u0627\u062a \u0645\u0648\u0642\u0651\u0639\u0629 \u0641\u0642\u0637.",
      termsn: "\u0627\u0644\u0642\u0648\u0627\u0639\u062f \u0648\u0642\u0627\u0626\u0645\u0629 \u0627\u0644\u0625\u064a\u0642\u0627\u0641 \u0648\u062c\u062f\u0648\u0644 \u0627\u0644\u0627\u0631\u0628\u0627\u062d \u0641\u064a github.com/elghaly-dev/35.",
      earnt: "\u062c\u062f\u0648\u0644 \u0627\u0644\u0627\u0631\u0628\u0627\u062d", earnwhat: "\u0645\u0627 \u064a\u0643\u0633\u0628 \u0627\u0639\u062a\u0645\u0627\u062f\u064b\u0627", earncredit: "\u0627\u0644\u0627\u0639\u062a\u0645\u0627\u062f",
      credt: "\u0644\u0645\u0627\u0640 \u064a\u064f\u0633\u062a\u062e\u062f\u0645 \u0627\u0644\u0627\u0639\u062a\u0645\u0627\u062f",
      ledt: "\u062f\u0641\u062a\u0631 \u0627\u0644\u0623\u0633\u062a\u0627\u062d\u0642",
      onChain: "\u0639\u0644\u0649 \u0627\u0644\u0633\u0644\u0633\u0644\u0629", inLedger: "\u0641\u064a \u0627\u0644\u062f\u0641\u062a\u0631", missing: "\u0646\u0627\u0642\u0635", entries: "\u0625\u062f\u062e\u0627\u0644\u0627\u062a", total: "\u0627\u0644\u0625\u062c\u0645\u0627\u0644\u064a", lastRec: "\u0622\u062e\u0631 \u0645\u0637\u0627\u0628\u0642\u0629",
      addr: "\u0627\u0644\u0639\u0646\u0627\u0648\u064a\u0646", mode: "\u0627\u0644\u0648\u0636\u0639", support: "\u0627\u0644\u062f\u0639\u0645", mint: "\u0627\u0644\u0633\u0643", pool: "\u0627\u062a\u062c\u0627\u0647 \u0627\u0644\u0633\u064a\u0648\u0644\u0629", mail: "\u0628\u0631\u064a\u062f",
      record: "\u0627\u0644\u0633\u062c\u0644 \u0627\u0644\u0639\u0627\u0645",
      footerContact: "\u0627\u0644\u0628\u0631\u064a\u062f \u0623\u0648\u0644\u064b\u0627: support@elghaly.dev. \u0627\u0644\u0645\u0643\u0627\u0644\u0645\u0627\u062a \u0628\u0627\u0644\u062a\u0639\u064a\u064a\u0646 \u0641\u0642\u0637.",
      ledgerNote: "\u0644\u0642\u0637\u0629 \u0632\u0645\u0646\u064a\u0629 \u0644\u0627 \u062a\u062a\u062d\u062f\u0651\u062b \u0645\u0639 \u062a\u0634\u063a\u064a\u0644 \u0627\u0644\u0645\u0643\u062a\u0628: \u0622\u062e\u0631 \u0645\u0637\u0627\u0628\u0642\u0629 \u0639\u0644\u0649 \u0635\u0646\u062f\u0648\u0642 \u0627\u0644\u0645\u0643\u062a\u0628 (2026-09-17\u060c \u0627\u0644\u0623\u0633\u0628\u0648\u0639 2026-W38). \u062a\u0642\u0631\u0623 \u0647\u0630\u0647 \u0627\u0644\u0635\u0641\u062d\u0629 <a href=\"/ledger-snapshot.json\">ledger-snapshot.json</a> \u0648\u0644\u0627 \u062a\u0639\u064a\u062f \u0627\u062d\u062a\u0633\u0627\u0628 \u0627\u0644\u062f\u0641\u062a\u0631. \u064a\u0628\u0642\u0649 \u0627\u0644\u0633\u0643 \u063a\u064a\u0631 \u0645\u0646\u0634\u0648\u0631."
    }),
    ru: clone(EN, {
      kicker: "\u0417\u0430\u043a\u0440\u044b\u0442\u044b\u0439 \u0434\u0435\u0441\u043a \u00b7 \u043d\u0435 \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u043e\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435",
      lede: "35 \u2014 \u0437\u0430\u043a\u0440\u044b\u0442\u0430\u044f \u043a\u043d\u0438\u0433\u0430 \u0437\u0430\u0440\u0430\u0431\u043e\u0442\u0430\u043d\u043d\u043e\u0433\u043e \u043a\u0440\u0435\u0434\u0438\u0442\u0430 \u0434\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u0434\u0435\u0441\u043a\u0430. \u041d\u0435\u0442 \u043f\u0443\u0431\u043b\u0438\u0447\u043d\u043e\u0433\u043e \u0431\u043e\u0442\u0430, \u043d\u0435\u0442 \u043c\u043e\u043d\u0435\u0442\u044b \u0434\u043b\u044f \u043f\u043e\u043a\u0443\u043f\u043a\u0438, \u043d\u0435\u0442 \u0434\u0435\u043f\u043e\u0437\u0438\u0442\u043e\u0432. \u0421\u043c\u043e\u0442\u0440\u0438\u0442\u0435 \u0437\u0430\u043f\u0438\u0441\u044c. \u041f\u0438\u0448\u0438\u0442\u0435 \u043d\u0430 \u043f\u043e\u0447\u0442\u0443 \u043f\u0440\u0438 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e\u0441\u0442\u0438. \u041c\u0438\u043d\u0442 \u043d\u0435 \u043f\u0443\u0431\u043b\u0438\u043a\u0443\u0435\u0442\u0441\u044f, \u043f\u043e\u043a\u0430 \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d\u043d\u044b\u0439 \u0434\u043e\u0445\u043e\u0434 \u0434\u0435\u0441\u043a\u0430 \u043d\u0435 \u043f\u043e\u043a\u0440\u043e\u0435\u0442 \u0430\u0440\u0435\u043d\u0434\u0443.",
      doorst: "\u0414\u0432\u0435\u0440\u0438", askt: "\u0421\u043f\u0440\u043e\u0441\u0438\u0442\u044c 35",
      askPlaceholder: "\u0421\u043f\u0440\u043e\u0441\u0438\u0442\u0435 35", askBtn: "\u041e\u0442\u0432\u0435\u0442", mailBtn: "\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u0434\u0435\u0441\u043a\u0443",
      termst: "\u0423\u0441\u043b\u043e\u0432\u0438\u044f", earnt: "\u0422\u0430\u0431\u043b\u0438\u0446\u0430 \u0437\u0430\u0440\u0430\u0431\u043e\u0442\u043a\u0430", credt: "\u0417\u0430\u0447\u0435\u043c \u043d\u0443\u0436\u0435\u043d \u043a\u0440\u0435\u0434\u0438\u0442", ledt: "\u041a\u043d\u0438\u0433\u0430",
      addr: "\u0410\u0434\u0440\u0435\u0441\u0430", mode: "\u0420\u0435\u0436\u0438\u043c", support: "\u041f\u043e\u0434\u0434\u0435\u0440\u0436\u043a\u0430", mint: "\u041c\u0438\u043d\u0442", pool: "\u041f\u0443\u043b", mail: "\u041f\u043e\u0447\u0442\u0430",
      onChain: "\u0412 \u0441\u0435\u0442\u0438", inLedger: "\u0412 \u043a\u043d\u0438\u0433\u0435", missing: "\u041d\u0435\u0442 \u0432 \u043a\u043d\u0438\u0433\u0435", entries: "\u0417\u0430\u043f\u0438\u0441\u0438", total: "\u0418\u0442\u043e\u0433", lastRec: "\u041f\u043e\u0441\u043b\u0435\u0434\u043d\u044f\u044f \u0441\u0432\u0435\u0440\u043a\u0430",
      footerContact: "\u0421\u043d\u0430\u0447\u0430\u043b\u0430 \u043f\u0438\u0448\u0438\u0442\u0435: support@elghaly.dev. \u0417\u0432\u043e\u043d\u043a\u0438 \u0442\u043e\u043b\u044c\u043a\u043e \u043f\u043e \u0437\u0430\u043f\u0438\u0441\u0438.",
      termsn: "\u041f\u043e\u043b\u043d\u044b\u0435 \u043f\u0440\u0430\u0432\u0438\u043b\u0430 \u0438 \u0442\u0430\u0431\u043b\u0438\u0446\u0430 \u0437\u0430\u0440\u0430\u0431\u043e\u0442\u043a\u0430 \u0432 github.com/elghaly-dev/35."
    }),
    zh: clone(EN, {
      kicker: "\u95ed\u95e8\u684c \u00b7 \u975e\u516c\u5f00\u5e94\u7528",
      lede: "35 \u662f\u672c\u684c\u7684\u79c1\u6709\u8d26\u672c\uff0c\u8bb0\u5f55\u5de5\u4f5c\u6362\u53d6\u7684\u79ef\u5206\u3002\u6ca1\u6709\u516c\u5f00\u673a\u5668\u4eba\uff0c\u6ca1\u6709\u53ef\u4e70\u7684\u5e01\uff0c\u4e5f\u4e0d\u63a5\u6536\u5b58\u6b3e\u3002\u8bf7\u67e5\u9605\u516c\u5f00\u8bb0\u5f55\u3002\u5fc5\u8981\u65f6\u53d1\u90ae\u4ef6\u3002\u5728\u684c\u9762\u5b9e\u9645\u6536\u5165\u8986\u76d6\u79df\u91d1\u524d\uff0c\u94f8\u5e01\u4e0d\u516c\u5f00\u3002",
      doorst: "\u95e8", askt: "\u95ee 35", askPlaceholder: "\u95ee 35", askBtn: "\u56de\u7b54", mailBtn: "\u90ae\u4ef6\u8054\u7cfb\u684c\u9762",
      termst: "\u6761\u6b3e", earnt: "\u79ef\u5206\u8868", credt: "\u79ef\u5206\u7528\u9014", ledt: "\u8d26\u672c",
      addr: "\u5730\u5740", mode: "\u6a21\u5f0f", support: "\u652f\u6301", mint: "\u94f8\u5e01", pool: "\u6c60", mail: "\u90ae\u4ef6",
      onChain: "\u94fe\u4e0a", inLedger: "\u8d26\u672c\u5185", missing: "\u7f3a\u5931", entries: "\u6761\u76ee", total: "\u5408\u8ba1", lastRec: "\u6700\u8fd1\u5bf9\u8d26",
      footerContact: "\u8bf7\u5148\u53d1\u90ae\u4ef6\uff1asupport@elghaly.dev\u3002\u7535\u8bdd\u53ea\u63a5\u9884\u7ea6\u3002",
      termsn: "\u5b8c\u6574\u89c4\u5219\u4e0e\u79ef\u5206\u8868\u89c1 github.com/elghaly-dev/35\u3002"
    }),
    de: clone(EN, {
      kicker: "Geschlossener Desk \u00b7 keine \u00f6ffentliche App",
      doorst: "T\u00fcren", askt: "35 fragen", askPlaceholder: "35 fragen", askBtn: "Antwort", mailBtn: "Desk mailen",
      termst: "Bedingungen", earnt: "Verdienstplan", credt: "Wof\u00fcr ein Credit gilt", ledt: "Ledger",
      footerContact: "Zuerst E-Mail: support@elghaly.dev. Anrufe nur nach Termin."
    }),
    es: clone(EN, {
      kicker: "Mesa cerrada \u00b7 no es una app p\u00fablica",
      doorst: "Puertas", askt: "Preguntar a 35", askPlaceholder: "Pregunta a 35", askBtn: "Responder", mailBtn: "Escribir al desk",
      termst: "T\u00e9rminos", earnt: "Tabla de cr\u00e9ditos", credt: "Para qu\u00e9 sirve un cr\u00e9dito", ledt: "Libro mayor",
      footerContact: "Primero correo: support@elghaly.dev. Llamadas solo con cita."
    })
  };

  var LANGS = ["en", "ar", "ru", "zh", "de", "es"];
  var LABELS = {
    en: "English",
    ar: "\u0627\u0644\u0639\u0631\u0628\u064a\u0629",
    ru: "\u0420\u0443\u0441\u0441\u043a\u0438\u0439",
    zh: "\u4e2d\u6587",
    de: "Deutsch",
    es: "Espa\u00f1ol"
  };

  var HTML_KEYS = { askNote: 1, ledgerNote: 1 };

  function applyLang(lang) {
    if (!T[lang]) lang = "en";
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    var pack = T[lang];
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var k = el.getAttribute("data-i18n");
      if (!pack[k]) return;
      if (HTML_KEYS[k]) el.innerHTML = pack[k];
      else el.textContent = pack[k];
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var k = el.getAttribute("data-i18n-placeholder");
      if (pack[k]) el.placeholder = pack[k];
    });
    document.querySelectorAll("#langbar button").forEach(function (b) {
      var on = b.getAttribute("data-lang") === lang;
      b.setAttribute("aria-pressed", on ? "true" : "false");
    });
    try { localStorage.setItem("35-lang", lang); } catch (e) {}
  }

  var bar = document.getElementById("langbar");
  if (bar && !bar.children.length) {
    LANGS.forEach(function (code) {
      var b = document.createElement("button");
      b.type = "button";
      b.setAttribute("data-lang", code);
      b.textContent = LABELS[code];
      b.onclick = function () { applyLang(code); };
      bar.appendChild(b);
    });
  }
  try { applyLang(localStorage.getItem("35-lang") || "en"); } catch (e) { applyLang("en"); }

  function answer(q) {
    q = (q || "").toLowerCase();
    if (!q.trim()) return "Type a question first.";
    if (/buy|purchase|price|chart|ape|presale|ico/.test(q)) return "You do not buy 35. No presale. No chart. Mint is unpublished.";
    if (/deposit|send (sol|usdc)|invest/.test(q)) return "Do not send SOL or USDC. There is no deposit address for credits.";
    if (/wallet|desksigner|squads/.test(q)) return "Public: deskSigner 3BZGNtr7\u2026npbLo (memo only). Squads GMyuRJ\u2026czcQ (treasury later). Do not send deposits. Mint unpublished.";
    if (/mint|contract|\bca\b|token address/.test(q)) return "Mint is unpublished. There is no contract to ape.";
    if (/pool|jupiter|swap|raydium|meteora/.test(q)) return "No 35/USDC pool yet.";
    if (/airdrop|member|points/.test(q)) return "Visiting this site does not earn 35.";
    if (/iris|plumb|door/.test(q)) return "Doors: Iris (free glass) at iris-35.elghaly.dev. Plumb (ready desk seats) at plumb-35.elghaly.dev. Neither sells 35 credits.";
    if (/reconcil|ledger|w38|week/.test(q)) return "Ledger snapshot from the desk box, 2026-W38: on chain 5, in ledger 5, missing 0, total 5.000000, reconciled then. This page does not recompute it. Mint unpublished.";
    return "Logged to the desk. A human reads 35@elghaly.dev.";
  }

  function notifyDesk(q) {
    return fetch("https://formsubmit.co/ajax/35@elghaly.dev", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ _subject: "ASK 35 \u2014 35.elghaly.dev", message: q, source: "https://35.elghaly.dev" })
    }).then(function (r) {
      if (!r.ok) throw new Error("form service HTTP " + r.status);
      return r.json().catch(function () { return {}; }).then(function (j) {
        if (j && (j.success === false || j.success === "false")) throw new Error("form service refused");
        return j;
      });
    });
  }

  var askBtn = document.getElementById("askBtn");
  if (askBtn) askBtn.onclick = function () {
    var q = document.getElementById("q").value || "";
    document.getElementById("a").textContent = answer(q);
    document.getElementById("sent").textContent = "Sending a copy to 35@elghaly.dev\u2026";
    notifyDesk(q).then(function () {
      document.getElementById("sent").textContent = "Copy sent toward 35@elghaly.dev.";
    }).catch(function () {
      document.getElementById("sent").textContent = "Instant answer is up. Mail copy failed \u2014 use Mail the desk.";
    });
  };
  var mailBtn = document.getElementById("mailBtn");
  if (mailBtn) mailBtn.onclick = function () {
    location.href = "mailto:35@elghaly.dev?subject=ASK%2035&body=" + encodeURIComponent((document.getElementById("q") || {}).value || "");
  };

  fetch("/ledger-snapshot.json").then(function (r) { return r.ok ? r.json() : null; }).then(function (s) {
    var box = document.getElementById("ledger");
    if (!box) return;
    function put(key, v) { var el = box.querySelector('[data-snap="' + key + '"]'); if (el) el.textContent = String(v); }
    function blank() {
      var cells = box.querySelectorAll("[data-snap]");
      for (var i = 0; i < cells.length; i++) cells[i].textContent = "\u2014";
      var lang = document.documentElement.lang || "en";
      var pack = T[lang] || T.en;
      put("status", pack.snapshotUnavailable);
    }
    if (!s || s.format !== "35-ledger-snapshot/1") {
      blank();
      var n = document.getElementById("ledgerNote");
      if (n) {
        var lang = document.documentElement.lang || "en";
        n.textContent = (T[lang] || T.en).ledgerNoteFail;
      }
      return;
    }
    var day = String(s.at || "").slice(0, 10);
    put("onChain", s.onChain); put("inLedger", s.inLedger); put("missing", s.missing);
    put("entries", s.entries); put("total", s.total);
    var w = (s.byWeek && s.byWeek[s.byWeek.length - 1]) || null;
    if (w) { put("week", w.week); put("weekCredit", w.credit); }
    put("status", (s.status === "reconciled" ? "reconciled" : "not reconciled") + " on " + day);
  }).catch(function () {
    var box = document.getElementById("ledger");
    if (!box) return;
    var cells = box.querySelectorAll("[data-snap]");
    for (var i = 0; i < cells.length; i++) cells[i].textContent = "\u2014";
    var lang = document.documentElement.lang || "en";
    var pack = T[lang] || T.en;
    var el = box.querySelector('[data-snap="status"]');
    if (el) el.textContent = pack.snapshotUnavailable;
    var n = document.getElementById("ledgerNote");
    if (n) n.textContent = pack.ledgerNoteFail;
  });

  fetch("/protocol.json").then(function (r) { return r.ok ? r.json() : null; }).then(function (p) {
    if (!p) return;
    function set(id, v) { var el = document.getElementById(id); if (el && v) el.textContent = v; }
    set("mode", p.issuanceMode);
    if (p.mint) set("mint", p.mint);
    if (p.pool) set("pool", p.pool);
  }).catch(function () {});
})();
