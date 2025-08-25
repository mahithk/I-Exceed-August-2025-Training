const zones = Intl.supportedValuesOf("timeZone");
zones.forEach(tz => {
    const now = new Date();
    const formatted = new Intl.DateTimeFormat("en-US", {
        timeZone: tz,
        dateStyle: "full",
        timeStyle: "long"
    }).format(now);
    console.log(`${tz} → ${formatted}`);
});
