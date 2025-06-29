const moment = require('moment-timezone');


module.exports.config = {

  name: "autotime",

  version: "2.0.0",

  credits: "KING_Shourov",

  description: "Send royal sad captions every 30 minutes with stylish time in Dhaka timezone."

};


const sadCaptions = [

  "🥀 কষ্ট পেতে পেতে অভ্যস্ত হয়ে গেছি।𝐊𝐢𝐧𝐠_𝐒𝐡𝐨𝐮𝐫𝐨𝐯",

  "💔 ভালোবাসা এখন আর অনুভব হয় না।𝐊𝐢𝐧𝐠_𝐒𝐡𝐨𝐮𝐫𝐨𝐯",

  "😢 আমি সব হারিয়ে ফেলেছি, শুধু শ্বাস নিচ্ছি।𝐊𝐢𝐧𝐠_𝐒𝐡𝐨𝐮𝐫𝐨𝐯",

  "🥺 হঠাৎ করেই কেউ কেউ অনেক অচেনা হয়ে যায়।𝐊𝐢𝐧𝐠_𝐒𝐡𝐨𝐮𝐫𝐨𝐯",

  "😔 সবাই পাশে থাকে, দরকারের সময় ছাড়া।𝐊𝐢𝐧𝐠_𝐒𝐡𝐨𝐮𝐫𝐨𝐯",

  "😭 কাউকে বুঝাতে পারি না, কতটা কষ্টে আছি।𝐊𝐢𝐧𝐠_𝐒𝐡𝐨𝐮𝐫𝐨𝐯",

  "💭 কিছু সম্পর্ক না চাইতেও শেষ হয়ে যায়।𝐊𝐢𝐧𝐠_𝐒𝐡𝐨𝐮𝐫𝐨𝐯",

  "😓 নিজের কাছেই নিজেকে হারিয়ে ফেলেছি।𝐊𝐢𝐧𝐠_𝐒𝐡𝐨𝐮𝐫𝐨𝐯",

  "😩 মনের মধ্যে একটা শূন্যতা কাজ করে সবসময়।𝐊𝐢𝐧𝐠_𝐒𝐡𝐨𝐮𝐫𝐨𝐯",

  "🖤 হাসি দিয়ে কষ্ট ঢাকতে হয়, কারণ সবাই খুশি দেখতে চায়।𝐊𝐢𝐧𝐠_𝐒𝐡𝐨𝐮𝐫𝐨𝐯",

  "🥀 মাঝে মাঝে নিজের অস্তিত্বটাই হারিয়ে ফেলি।𝐊𝐢𝐧𝐠_𝐒𝐡𝐨𝐮𝐫𝐨𝐯",

  "💔 যাকে ভেবেছিলাম আমার, সে ছিল অন্য কারো।𝐊𝐢𝐧𝐠_𝐒𝐡𝐨𝐮𝐫𝐨𝐯",

  "😔 ভালো থেকো, আমি আর তোমার মতো না।𝐊𝐢𝐧𝐠_𝐒𝐡𝐨𝐮𝐫𝐨𝐯",

  "🥺 কান্না আসে, কারণ মনে পড়ে যায় তোমাকে।𝐊𝐢𝐧𝐠_𝐒𝐡𝐨𝐮𝐫𝐨𝐯",

  "😢 কিছু ব্যথা একাই সহ্য করতে হয়।𝐊𝐢𝐧𝐠_𝐒𝐡𝐨𝐮𝐫𝐨𝐯",

  "😭 নিজেকে গুটিয়ে ফেলেছি, কষ্টের ভয়ে।𝐊𝐢𝐧𝐠_𝐒𝐡𝐨𝐮𝐫𝐨𝐯",

  "🥀 অভিমান জমতে জমতে ভালোবাসা ফুরিয়ে যায়।𝐊𝐢𝐧𝐠_𝐒𝐡𝐨𝐮𝐫𝐨𝐯",

  "💭 কিছু মানুষ স্মৃতি হয়ে থাকে শুধু।𝐊𝐢𝐧𝐠_𝐒𝐡𝐨𝐮𝐫𝐨𝐯",

  "🖤 ভালোবাসা ছিল, আছে, থাকবে... কিন্তু তুমি নাই।𝐊𝐢𝐧𝐠_𝐒𝐡𝐨𝐮𝐫𝐨𝐯",

  "😩 আমি ঠিক আছি, এটাই সবচেয়ে বড় মিথ্যে।𝐊𝐢𝐧𝐠_𝐒𝐡𝐨𝐮𝐫𝐨𝐯",

  "💔 অপেক্ষা করেছিলাম... তুমি আসোনি।𝐊𝐢𝐧𝐠_𝐒𝐡𝐨𝐮𝐫𝐨𝐯",

  "🥺 আজও তোমার কথা মনে পড়ে।𝐊𝐢𝐧𝐠_𝐒𝐡𝐨𝐮𝐫𝐨𝐯"

];


const sentToday = new Set();


function toStylishTime(date) {

  let h = date.getHours();

  let m = date.getMinutes();

  const ampm = h >= 12 ? "𝐏𝐌" : "𝐀𝐌";

  h = h % 12 || 12;

  const styledDigits = ['𝟎','𝟏','𝟐','𝟑','𝟒','𝟓','𝟔','𝟕','𝟖','𝟗'];

  const style = n => n.toString().padStart(2, '0').split('').map(d => styledDigits[+d]).join('');

  return `${style(h)} : ${style(m)} ${ampm}`;

}


async function sendSadCaption(api, threadList) {

  const now = moment().tz('Asia/Dhaka').toDate();

  const today = now.toISOString().split("T")[0];

  const timeStyled = toStylishTime(now);


  const unsent = sadCaptions

    .map((text, index) => ({ text, index }))

    .filter(({ index }) => !sentToday.has(`${today}-${index}`));


  if (unsent.length === 0) return;


  const chosen = unsent[Math.floor(Math.random() * unsent.length)];

  sentToday.add(`${today}-${chosen.index}`);


  const msg = 

    `╔═══════════════[ 🕰️ 𝙏𝙄𝙈𝙀 ]═══════════════╗\n` +

    `║       ${timeStyled} │ 🔰 𝐊𝐈𝐍𝐆 𝐒𝐇𝐎𝐔𝐑𝐎𝐕 - 𝐁𝐎𝐓 ⚜️\n` +

    `╚═══════════════════════════════════╝\n\n` +

    `🖤 𝒮𝒶𝒹 𝒞𝒶𝓅𝓉𝒾𝑜𝓃:\n` +

    `❝ ${chosen.text} ❞\n\n` +

    `━━━━━━━━━━━━━━━༺🖤༻━━━━━━━━━━━━━━━`;


  for (const thread of threadList) {

    api.sendMessage(msg, thread.threadID);

  }

}


module.exports.run = async function({ api }) {

  const threadList = await api.getThreadList(50, null, ["INBOX"]);

  const interval = 30 * 60 * 1000; // ৩০ মিনিট


  // বট চালুর সময়েই প্রথম ক্যাপশন পাঠানো হবে

  await sendSadCaption(api, threadList);


  // তারপর প্রতি ৩০ মিনিটে পাঠাবে

  setInterval(() => {

    sendSadCaption(api, threadList);

  }, interval);

};
