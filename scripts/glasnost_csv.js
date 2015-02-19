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
       "verdict, " +
       "verdict_reason, " +
       "mlab_server, " +
       "probe_city, " +
       "probe_localtime, " +
       "sysinfo, " +
       "test_completed, " +
       "probe_region, " +
       "probe_region_name, " +
       "probe_timezone, " +
       "proto, " +
       "runtime");

db.reports.find({
    software_name: "glasnost"
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
           qqq(result.measurements[0].measurements_analysis.verdict) + ", " +
           qqq(result.measurements[0].measurements_analysis.verdict_reason) + ", " +
           qqq(result.measurements[0].mlab_server) + ", " +
           qqq(result.measurements[0].probe_city) + ", " +
           qqq(result.measurements[0].probe_localtime) + ", " +
           qqq(result.measurements[0].sysinfo) + ", " +
           qqq(result.measurements[0].test_completed) + ", " +
           qqq(result.measurements[0].probe_region) + ", " +
           qqq(result.measurements[0].probe_region_name) + ", " +
           qqq(result.measurements[0].probe_timezone) + ", " +
           qqq(result.measurements[0].proto) + ", " +
           qqq(result.measurements[0].runtime));
});
