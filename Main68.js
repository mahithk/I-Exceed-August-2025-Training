const timeZones = Intl.supportedValuesOf('timeZone');
console.log("Total Time Zones:", timeZones.length);

const formatterKolkata = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Kolkata",
    timeStyle: "medium",
    dateStyle: "long"
});
const formatterTokyo = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Tokyo",
    timeStyle: "medium",
    dateStyle: "long"
});
const formatterLondon = new Intl.DateTimeFormat("en-GB", {
    timeZone: "Europe/London",
    timeStyle: "medium",
    dateStyle: "long"
});
const formatterNewYork = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    timeStyle: "medium",
    dateStyle: "long"
});
const formatterSydney = new Intl.DateTimeFormat("en-AU", {
    timeZone: "Australia/Sydney",
    timeStyle: "medium",
    dateStyle: "long"
});

const now = new Date();

console.log("India:", formatterKolkata.format(now));
console.log("Japan:", formatterTokyo.format(now));
console.log("UK:", formatterLondon.format(now));
console.log("USA:", formatterNewYork.format(now));
console.log("Australia:", formatterSydney.format(now));
