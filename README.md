# Neubot Pipeline

This repository contains an experimental (alpha stage!) pipeline for
importing and processing data available at
[Measurement Lab](http://www.measurementlab.net/). It is called Neubot
pipeline because it was developed by Simone Basso in the context of
the [Neubot project](http://www.neubot.org/).

## How to clone neubot-pipeline

To clone properly libight repository, make sure that you specify the
`--recursive` command line flag, as in:

    git clone --recursive https://github.com/bassosimone/neubot-pipeline

Such flag tells git to clone not only the libight repository, but also
the [submodules](http://git-scm.com/docs/git-submodule) contained therein.

Alternatively, once you have cloned the repository, you can checkout all
the submodules using:

    git submodule update --init

## How to use neubot-pipeline

### Install dependencies

First, you need to install the dependencies. Specifically, you need
to install the following Python modules:

    GeoIP pymongo pytz pyyaml

You also need:

    mongodb

Which is used to store data.

On Ubuntu (or on any other Debian-based distribution), you could
install all of this with the following command:

    sudo apt-get install mongodb python-geoip python-pymongo \
                         python-tz python-yaml

### Download GeoLite databases

In addition you also need to [download the free GeoLite City and
ASN databases from MaxMind](http://dev.maxmind.com/geoip/legacy/geolite/).

Specifically you need to create below data a per-year and per-month
folders containing uncompressed GeoLite databases.

To this end, you can use the script `./bin/fetch_geoip` that downloads
a mirror of the GeoLite data maintained at `data.neubot.org`:

    ./bin/fetch_geoip

The script also accepts parameters to allow you to download only
the GeoLite files that you need, e.g.:

    ./bin/fetch_geoip 2014/11 2014/12

Note that the GeoLite databases downloaded using this procedure are
not always the best GeoLite databases for all months. In fact many of
these databases were downloaded recently using the [Internet
Archive's wayback machine](http://archive.org/web/). So there are
months in which the GeoLite database used is more than six months old
which [has an impact on accuracy](://www.maxmind.com/en/geoip2-city-database-accuracy).

It is in our (well, in my...) TODO list to improve the way in
which geolocation is implemented.

### Pull and process data

You are now ready to pull data from
[Measurement Lab](http://www.measurementlab.net/). We currently
support data from these three tools:

- [Neubot](http://neubot.org/)
- [OONI](https://ooni.torproject.org/)
- [Glasnost](http://broadband.mpi-sws.org/transparency/bttest.php)

As regards Neubot, we only support loading data of its `speedtest` and
`BitTorrent` tests. As regards Glasnost, we only support version 2 of
its logfiles (which is used since 2010-04-20).

To pull and import Neubot's data of January, 2015 into MongoDB, run:

    ./bin/pull neubot/2015/01

Afterwards, you can log in MongoBD and check whether everything was
correctly imported

    $ mongodb
    > use ooni
    > db.reports.find()
    ...   # skipped output here

### Export data as CSV

To export data as CSV, use the `bin/export_csv` script. It can export
data of Neubot and Glasnost as follows:

    ./bin/export_csv neubot

or:

    ./bin/export_csv glasnost

## Acknowledgments

This piece of software is deeply based on
[ooni-pipeline](https://github.com/TheTorProject/ooni-pipeline), the
data import and processing pipeline developed by the
[OONI project](https://ooni.torproject.org/).

The Glasnost logfiles parser is a modified version of [the parser
developed by Hadi Asghari for Glasnost](https://code.google.com/p/glasnost/source/browse/#git%2Fpython_parser%2Fparser).
