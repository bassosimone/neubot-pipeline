function qqq(field) {
    if (typeof (field) == "string") {
        if (field.indexOf('"') >= 0) {
            field = field.replace('"', '""');
        }
        if (field.indexOf(",") >=0 ) {
            field = '"' + field + '"';
        }
    }
    return field;
}

print ("data_format_version, " +
       "probe_asn, " +
       "probe_cc, " +
       "probe_ip, " +
       "software_name, " +
       "start_time, " +
       "test_name, " +
       "test_version, " +
       "version, " +
       "connect_time, " +
       "download_speed, " +
       "latency, " +
       "platform, " +
       "probe_city, " +
       "probe_location, " +
       "probe_region, " +
       "probe_region_name, " +
       "probe_timezone, " +
       "remote_address, " +
       "upload_speed, " +
       "uuid");

db.reports.find({
    software_name: "neubot"
}).forEach(function (result) {
    print (qqq(result.data_format_version) + ", " +
           qqq(result.probe_asn) + ", " +
           qqq(result.probe_cc) + ", " +
           qqq(result.probe_ip) + ", " +
           qqq(result.software_name) + ", " +
           qqq(result.start_time) + ", " +
           qqq(result.test_name) + ", " +
           qqq(result.test_version) + ", " +
           qqq(result.version) + ", " +
           qqq(result.measurements[0].connect_time) + ", " +
           qqq(result.measurements[0].download_speed) + ", " +
           qqq(result.measurements[0].latency) + ", " +
           qqq(result.measurements[0].platform) + ", " +
           qqq(result.measurements[0].probe_city) + ", " +
           qqq(result.measurements[0].probe_localtime) + ", " +
           qqq(result.measurements[0].probe_region) + ", " +
           qqq(result.measurements[0].probe_region_name) + ", " +
           qqq(result.measurements[0].probe_timezone) + ", " +
           qqq(result.measurements[0].remote_address) + ", " +
           qqq(result.measurements[0].upload_speed) + ", " +
           qqq(result.measurements[0].uuid));
});
