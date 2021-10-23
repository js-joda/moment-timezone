"use strict";

var helpers = require("../../helpers/helpers");

exports["Africa/Casablanca"] = {

	"guess:by:offset" : helpers.makeTestGuess("Africa/Casablanca", { offset: true }),

	"guess:by:abbr" : helpers.makeTestGuess("Africa/Casablanca", { abbr: true }),

	"1939" : helpers.makeTestYear("Africa/Casablanca", [
		["1939-09-11T23:59:59+00:00", "23:59:59", "+00", 0, 0],
		["1939-09-12T00:00:00+00:00", "01:00:00", "+01", -60, 1],
		["1939-11-18T22:59:59+00:00", "23:59:59", "+01", -60, 1],
		["1939-11-18T23:00:00+00:00", "23:00:00", "+00", 0, 0]
	]),

	"1940" : helpers.makeTestYear("Africa/Casablanca", [
		["1940-02-24T23:59:59+00:00", "23:59:59", "+00", 0, 0],
		["1940-02-25T00:00:00+00:00", "01:00:00", "+01", -60, 1]
	]),

	"1945" : helpers.makeTestYear("Africa/Casablanca", [
		["1945-11-17T22:59:59+00:00", "23:59:59", "+01", -60, 1],
		["1945-11-17T23:00:00+00:00", "23:00:00", "+00", 0, 0]
	]),

	"1950" : helpers.makeTestYear("Africa/Casablanca", [
		["1950-06-10T23:59:59+00:00", "23:59:59", "+00", 0, 0],
		["1950-06-11T00:00:00+00:00", "01:00:00", "+01", -60, 1],
		["1950-10-28T22:59:59+00:00", "23:59:59", "+01", -60, 1],
		["1950-10-28T23:00:00+00:00", "23:00:00", "+00", 0, 0]
	]),

	"1967" : helpers.makeTestYear("Africa/Casablanca", [
		["1967-06-03T11:59:59+00:00", "11:59:59", "+00", 0, 0],
		["1967-06-03T12:00:00+00:00", "13:00:00", "+01", -60, 1],
		["1967-09-30T22:59:59+00:00", "23:59:59", "+01", -60, 1],
		["1967-09-30T23:00:00+00:00", "23:00:00", "+00", 0, 0]
	]),

	"1974" : helpers.makeTestYear("Africa/Casablanca", [
		["1974-06-23T23:59:59+00:00", "23:59:59", "+00", 0, 0],
		["1974-06-24T00:00:00+00:00", "01:00:00", "+01", -60, 1],
		["1974-08-31T22:59:59+00:00", "23:59:59", "+01", -60, 1],
		["1974-08-31T23:00:00+00:00", "23:00:00", "+00", 0, 0]
	]),

	"1976" : helpers.makeTestYear("Africa/Casablanca", [
		["1976-04-30T23:59:59+00:00", "23:59:59", "+00", 0, 0],
		["1976-05-01T00:00:00+00:00", "01:00:00", "+01", -60, 1],
		["1976-07-31T22:59:59+00:00", "23:59:59", "+01", -60, 1],
		["1976-07-31T23:00:00+00:00", "23:00:00", "+00", 0, 0]
	]),

	"1977" : helpers.makeTestYear("Africa/Casablanca", [
		["1977-04-30T23:59:59+00:00", "23:59:59", "+00", 0, 0],
		["1977-05-01T00:00:00+00:00", "01:00:00", "+01", -60, 1],
		["1977-09-27T22:59:59+00:00", "23:59:59", "+01", -60, 1],
		["1977-09-27T23:00:00+00:00", "23:00:00", "+00", 0, 0]
	]),

	"1978" : helpers.makeTestYear("Africa/Casablanca", [
		["1978-05-31T23:59:59+00:00", "23:59:59", "+00", 0, 0],
		["1978-06-01T00:00:00+00:00", "01:00:00", "+01", -60, 1],
		["1978-08-03T22:59:59+00:00", "23:59:59", "+01", -60, 1],
		["1978-08-03T23:00:00+00:00", "23:00:00", "+00", 0, 0]
	]),

	"1984" : helpers.makeTestYear("Africa/Casablanca", [
		["1984-03-15T23:59:59+00:00", "23:59:59", "+00", 0, 0],
		["1984-03-16T00:00:00+00:00", "01:00:00", "+01", -60, 0]
	]),

	"1985" : helpers.makeTestYear("Africa/Casablanca", [
		["1985-12-31T22:59:59+00:00", "23:59:59", "+01", -60, 0],
		["1985-12-31T23:00:00+00:00", "23:00:00", "+00", 0, 0]
	]),

	"2008" : helpers.makeTestYear("Africa/Casablanca", [
		["2008-05-31T23:59:59+00:00", "23:59:59", "+00", 0, 0],
		["2008-06-01T00:00:00+00:00", "01:00:00", "+01", -60, 1],
		["2008-08-31T22:59:59+00:00", "23:59:59", "+01", -60, 1],
		["2008-08-31T23:00:00+00:00", "23:00:00", "+00", 0, 0]
	]),

	"2009" : helpers.makeTestYear("Africa/Casablanca", [
		["2009-05-31T23:59:59+00:00", "23:59:59", "+00", 0, 0],
		["2009-06-01T00:00:00+00:00", "01:00:00", "+01", -60, 1],
		["2009-08-20T22:59:59+00:00", "23:59:59", "+01", -60, 1],
		["2009-08-20T23:00:00+00:00", "23:00:00", "+00", 0, 0]
	]),

	"2010" : helpers.makeTestYear("Africa/Casablanca", [
		["2010-05-01T23:59:59+00:00", "23:59:59", "+00", 0, 0],
		["2010-05-02T00:00:00+00:00", "01:00:00", "+01", -60, 1],
		["2010-08-07T22:59:59+00:00", "23:59:59", "+01", -60, 1],
		["2010-08-07T23:00:00+00:00", "23:00:00", "+00", 0, 0]
	]),

	"2011" : helpers.makeTestYear("Africa/Casablanca", [
		["2011-04-02T23:59:59+00:00", "23:59:59", "+00", 0, 0],
		["2011-04-03T00:00:00+00:00", "01:00:00", "+01", -60, 1],
		["2011-07-30T22:59:59+00:00", "23:59:59", "+01", -60, 1],
		["2011-07-30T23:00:00+00:00", "23:00:00", "+00", 0, 0]
	]),

	"2012" : helpers.makeTestYear("Africa/Casablanca", [
		["2012-04-29T01:59:59+00:00", "01:59:59", "+00", 0, 0],
		["2012-04-29T02:00:00+00:00", "03:00:00", "+01", -60, 1],
		["2012-07-20T01:59:59+00:00", "02:59:59", "+01", -60, 1],
		["2012-07-20T02:00:00+00:00", "02:00:00", "+00", 0, 0],
		["2012-08-20T01:59:59+00:00", "01:59:59", "+00", 0, 0],
		["2012-08-20T02:00:00+00:00", "03:00:00", "+01", -60, 1],
		["2012-09-30T01:59:59+00:00", "02:59:59", "+01", -60, 1],
		["2012-09-30T02:00:00+00:00", "02:00:00", "+00", 0, 0]
	]),

	"2013" : helpers.makeTestYear("Africa/Casablanca", [
		["2013-04-28T01:59:59+00:00", "01:59:59", "+00", 0, 0],
		["2013-04-28T02:00:00+00:00", "03:00:00", "+01", -60, 1],
		["2013-07-07T01:59:59+00:00", "02:59:59", "+01", -60, 1],
		["2013-07-07T02:00:00+00:00", "02:00:00", "+00", 0, 0],
		["2013-08-10T01:59:59+00:00", "01:59:59", "+00", 0, 0],
		["2013-08-10T02:00:00+00:00", "03:00:00", "+01", -60, 1],
		["2013-10-27T01:59:59+00:00", "02:59:59", "+01", -60, 1],
		["2013-10-27T02:00:00+00:00", "02:00:00", "+00", 0, 0]
	]),

	"2014" : helpers.makeTestYear("Africa/Casablanca", [
		["2014-03-30T01:59:59+00:00", "01:59:59", "+00", 0, 0],
		["2014-03-30T02:00:00+00:00", "03:00:00", "+01", -60, 1],
		["2014-06-28T01:59:59+00:00", "02:59:59", "+01", -60, 1],
		["2014-06-28T02:00:00+00:00", "02:00:00", "+00", 0, 0],
		["2014-08-02T01:59:59+00:00", "01:59:59", "+00", 0, 0],
		["2014-08-02T02:00:00+00:00", "03:00:00", "+01", -60, 1],
		["2014-10-26T01:59:59+00:00", "02:59:59", "+01", -60, 1],
		["2014-10-26T02:00:00+00:00", "02:00:00", "+00", 0, 0]
	]),

	"2015" : helpers.makeTestYear("Africa/Casablanca", [
		["2015-03-29T01:59:59+00:00", "01:59:59", "+00", 0, 0],
		["2015-03-29T02:00:00+00:00", "03:00:00", "+01", -60, 1],
		["2015-06-14T01:59:59+00:00", "02:59:59", "+01", -60, 1],
		["2015-06-14T02:00:00+00:00", "02:00:00", "+00", 0, 0],
		["2015-07-19T01:59:59+00:00", "01:59:59", "+00", 0, 0],
		["2015-07-19T02:00:00+00:00", "03:00:00", "+01", -60, 1],
		["2015-10-25T01:59:59+00:00", "02:59:59", "+01", -60, 1],
		["2015-10-25T02:00:00+00:00", "02:00:00", "+00", 0, 0]
	]),

	"2016" : helpers.makeTestYear("Africa/Casablanca", [
		["2016-03-27T01:59:59+00:00", "01:59:59", "+00", 0, 0],
		["2016-03-27T02:00:00+00:00", "03:00:00", "+01", -60, 1],
		["2016-06-05T01:59:59+00:00", "02:59:59", "+01", -60, 1],
		["2016-06-05T02:00:00+00:00", "02:00:00", "+00", 0, 0],
		["2016-07-10T01:59:59+00:00", "01:59:59", "+00", 0, 0],
		["2016-07-10T02:00:00+00:00", "03:00:00", "+01", -60, 1],
		["2016-10-30T01:59:59+00:00", "02:59:59", "+01", -60, 1],
		["2016-10-30T02:00:00+00:00", "02:00:00", "+00", 0, 0]
	]),

	"2017" : helpers.makeTestYear("Africa/Casablanca", [
		["2017-03-26T01:59:59+00:00", "01:59:59", "+00", 0, 0],
		["2017-03-26T02:00:00+00:00", "03:00:00", "+01", -60, 1],
		["2017-05-21T01:59:59+00:00", "02:59:59", "+01", -60, 1],
		["2017-05-21T02:00:00+00:00", "02:00:00", "+00", 0, 0],
		["2017-07-02T01:59:59+00:00", "01:59:59", "+00", 0, 0],
		["2017-07-02T02:00:00+00:00", "03:00:00", "+01", -60, 1],
		["2017-10-29T01:59:59+00:00", "02:59:59", "+01", -60, 1],
		["2017-10-29T02:00:00+00:00", "02:00:00", "+00", 0, 0]
	]),

	"2018" : helpers.makeTestYear("Africa/Casablanca", [
		["2018-03-25T01:59:59+00:00", "01:59:59", "+00", 0, 0],
		["2018-03-25T02:00:00+00:00", "03:00:00", "+01", -60, 1],
		["2018-05-13T01:59:59+00:00", "02:59:59", "+01", -60, 1],
		["2018-05-13T02:00:00+00:00", "02:00:00", "+00", 0, 0],
		["2018-06-17T01:59:59+00:00", "01:59:59", "+00", 0, 0],
		["2018-06-17T02:00:00+00:00", "03:00:00", "+01", -60, 1],
		["2018-10-28T01:59:59+00:00", "02:59:59", "+01", -60, 1],
		["2018-10-28T02:00:00+00:00", "03:00:00", "+01", -60, 0]
	]),

	"2019" : helpers.makeTestYear("Africa/Casablanca", [
		["2019-05-05T01:59:59+00:00", "02:59:59", "+01", -60, 0],
		["2019-05-05T02:00:00+00:00", "02:00:00", "+00", 0, 1],
		["2019-06-09T01:59:59+00:00", "01:59:59", "+00", 0, 1],
		["2019-06-09T02:00:00+00:00", "03:00:00", "+01", -60, 0]
	]),

	"2020" : helpers.makeTestYear("Africa/Casablanca", [
		["2020-04-19T01:59:59+00:00", "02:59:59", "+01", -60, 0],
		["2020-04-19T02:00:00+00:00", "02:00:00", "+00", 0, 1],
		["2020-05-31T01:59:59+00:00", "01:59:59", "+00", 0, 1],
		["2020-05-31T02:00:00+00:00", "03:00:00", "+01", -60, 0]
	]),

	"2021" : helpers.makeTestYear("Africa/Casablanca", [
		["2021-04-11T01:59:59+00:00", "02:59:59", "+01", -60, 0],
		["2021-04-11T02:00:00+00:00", "02:00:00", "+00", 0, 1],
		["2021-05-16T01:59:59+00:00", "01:59:59", "+00", 0, 1],
		["2021-05-16T02:00:00+00:00", "03:00:00", "+01", -60, 0]
	]),

	"2022" : helpers.makeTestYear("Africa/Casablanca", [
		["2022-03-27T01:59:59+00:00", "02:59:59", "+01", -60, 0],
		["2022-03-27T02:00:00+00:00", "02:00:00", "+00", 0, 1],
		["2022-05-08T01:59:59+00:00", "01:59:59", "+00", 0, 1],
		["2022-05-08T02:00:00+00:00", "03:00:00", "+01", -60, 0]
	]),

	"2023" : helpers.makeTestYear("Africa/Casablanca", [
		["2023-03-19T01:59:59+00:00", "02:59:59", "+01", -60, 0],
		["2023-03-19T02:00:00+00:00", "02:00:00", "+00", 0, 1],
		["2023-04-30T01:59:59+00:00", "01:59:59", "+00", 0, 1],
		["2023-04-30T02:00:00+00:00", "03:00:00", "+01", -60, 0]
	]),

	"2024" : helpers.makeTestYear("Africa/Casablanca", [
		["2024-03-10T01:59:59+00:00", "02:59:59", "+01", -60, 0],
		["2024-03-10T02:00:00+00:00", "02:00:00", "+00", 0, 1],
		["2024-04-14T01:59:59+00:00", "01:59:59", "+00", 0, 1],
		["2024-04-14T02:00:00+00:00", "03:00:00", "+01", -60, 0]
	]),

	"2025" : helpers.makeTestYear("Africa/Casablanca", [
		["2025-02-23T01:59:59+00:00", "02:59:59", "+01", -60, 0],
		["2025-02-23T02:00:00+00:00", "02:00:00", "+00", 0, 1],
		["2025-04-06T01:59:59+00:00", "01:59:59", "+00", 0, 1],
		["2025-04-06T02:00:00+00:00", "03:00:00", "+01", -60, 0]
	]),

	"2026" : helpers.makeTestYear("Africa/Casablanca", [
		["2026-02-15T01:59:59+00:00", "02:59:59", "+01", -60, 0],
		["2026-02-15T02:00:00+00:00", "02:00:00", "+00", 0, 1],
		["2026-03-22T01:59:59+00:00", "01:59:59", "+00", 0, 1],
		["2026-03-22T02:00:00+00:00", "03:00:00", "+01", -60, 0]
	]),

	"2027" : helpers.makeTestYear("Africa/Casablanca", [
		["2027-02-07T01:59:59+00:00", "02:59:59", "+01", -60, 0],
		["2027-02-07T02:00:00+00:00", "02:00:00", "+00", 0, 1],
		["2027-03-14T01:59:59+00:00", "01:59:59", "+00", 0, 1],
		["2027-03-14T02:00:00+00:00", "03:00:00", "+01", -60, 0]
	]),

	"2028" : helpers.makeTestYear("Africa/Casablanca", [
		["2028-01-23T01:59:59+00:00", "02:59:59", "+01", -60, 0],
		["2028-01-23T02:00:00+00:00", "02:00:00", "+00", 0, 1],
		["2028-03-05T01:59:59+00:00", "01:59:59", "+00", 0, 1],
		["2028-03-05T02:00:00+00:00", "03:00:00", "+01", -60, 0]
	]),

	"2029" : helpers.makeTestYear("Africa/Casablanca", [
		["2029-01-14T01:59:59+00:00", "02:59:59", "+01", -60, 0],
		["2029-01-14T02:00:00+00:00", "02:00:00", "+00", 0, 1],
		["2029-02-18T01:59:59+00:00", "01:59:59", "+00", 0, 1],
		["2029-02-18T02:00:00+00:00", "03:00:00", "+01", -60, 0],
		["2029-12-30T01:59:59+00:00", "02:59:59", "+01", -60, 0],
		["2029-12-30T02:00:00+00:00", "02:00:00", "+00", 0, 1]
	]),

	"2030" : helpers.makeTestYear("Africa/Casablanca", [
		["2030-02-10T01:59:59+00:00", "01:59:59", "+00", 0, 1],
		["2030-02-10T02:00:00+00:00", "03:00:00", "+01", -60, 0],
		["2030-12-22T01:59:59+00:00", "02:59:59", "+01", -60, 0],
		["2030-12-22T02:00:00+00:00", "02:00:00", "+00", 0, 1]
	]),

	"2031" : helpers.makeTestYear("Africa/Casablanca", [
		["2031-02-02T01:59:59+00:00", "01:59:59", "+00", 0, 1],
		["2031-02-02T02:00:00+00:00", "03:00:00", "+01", -60, 0],
		["2031-12-14T01:59:59+00:00", "02:59:59", "+01", -60, 0],
		["2031-12-14T02:00:00+00:00", "02:00:00", "+00", 0, 1]
	]),

	"2032" : helpers.makeTestYear("Africa/Casablanca", [
		["2032-01-18T01:59:59+00:00", "01:59:59", "+00", 0, 1],
		["2032-01-18T02:00:00+00:00", "03:00:00", "+01", -60, 0],
		["2032-11-28T01:59:59+00:00", "02:59:59", "+01", -60, 0],
		["2032-11-28T02:00:00+00:00", "02:00:00", "+00", 0, 1]
	]),

	"2033" : helpers.makeTestYear("Africa/Casablanca", [
		["2033-01-09T01:59:59+00:00", "01:59:59", "+00", 0, 1],
		["2033-01-09T02:00:00+00:00", "03:00:00", "+01", -60, 0],
		["2033-11-20T01:59:59+00:00", "02:59:59", "+01", -60, 0],
		["2033-11-20T02:00:00+00:00", "02:00:00", "+00", 0, 1],
		["2033-12-25T01:59:59+00:00", "01:59:59", "+00", 0, 1],
		["2033-12-25T02:00:00+00:00", "03:00:00", "+01", -60, 0]
	]),

	"2034" : helpers.makeTestYear("Africa/Casablanca", [
		["2034-11-05T01:59:59+00:00", "02:59:59", "+01", -60, 0],
		["2034-11-05T02:00:00+00:00", "02:00:00", "+00", 0, 1],
		["2034-12-17T01:59:59+00:00", "01:59:59", "+00", 0, 1],
		["2034-12-17T02:00:00+00:00", "03:00:00", "+01", -60, 0]
	]),

	"2035" : helpers.makeTestYear("Africa/Casablanca", [
		["2035-10-28T01:59:59+00:00", "02:59:59", "+01", -60, 0],
		["2035-10-28T02:00:00+00:00", "02:00:00", "+00", 0, 1],
		["2035-12-09T01:59:59+00:00", "01:59:59", "+00", 0, 1],
		["2035-12-09T02:00:00+00:00", "03:00:00", "+01", -60, 0]
	]),

	"2036" : helpers.makeTestYear("Africa/Casablanca", [
		["2036-10-19T01:59:59+00:00", "02:59:59", "+01", -60, 0],
		["2036-10-19T02:00:00+00:00", "02:00:00", "+00", 0, 1],
		["2036-11-23T01:59:59+00:00", "01:59:59", "+00", 0, 1],
		["2036-11-23T02:00:00+00:00", "03:00:00", "+01", -60, 0]
	]),

	"2037" : helpers.makeTestYear("Africa/Casablanca", [
		["2037-10-04T01:59:59+00:00", "02:59:59", "+01", -60, 0],
		["2037-10-04T02:00:00+00:00", "02:00:00", "+00", 0, 1],
		["2037-11-15T01:59:59+00:00", "01:59:59", "+00", 0, 1],
		["2037-11-15T02:00:00+00:00", "03:00:00", "+01", -60, 0]
	]),

	"2038" : helpers.makeTestYear("Africa/Casablanca", [
		["2038-09-26T01:59:59+00:00", "02:59:59", "+01", -60, 0],
		["2038-09-26T02:00:00+00:00", "02:00:00", "+00", 0, 1],
		["2038-11-07T01:59:59+00:00", "01:59:59", "+00", 0, 1],
		["2038-11-07T02:00:00+00:00", "03:00:00", "+01", -60, 0]
	]),

	"2039" : helpers.makeTestYear("Africa/Casablanca", [
		["2039-09-18T01:59:59+00:00", "02:59:59", "+01", -60, 0],
		["2039-09-18T02:00:00+00:00", "02:00:00", "+00", 0, 1],
		["2039-10-23T01:59:59+00:00", "01:59:59", "+00", 0, 1],
		["2039-10-23T02:00:00+00:00", "03:00:00", "+01", -60, 0]
	]),

	"2040" : helpers.makeTestYear("Africa/Casablanca", [
		["2040-09-02T01:59:59+00:00", "02:59:59", "+01", -60, 0],
		["2040-09-02T02:00:00+00:00", "02:00:00", "+00", 0, 1],
		["2040-10-14T01:59:59+00:00", "01:59:59", "+00", 0, 1],
		["2040-10-14T02:00:00+00:00", "03:00:00", "+01", -60, 0]
	]),

	"2041" : helpers.makeTestYear("Africa/Casablanca", [
		["2041-08-25T01:59:59+00:00", "02:59:59", "+01", -60, 0],
		["2041-08-25T02:00:00+00:00", "02:00:00", "+00", 0, 1],
		["2041-09-29T01:59:59+00:00", "01:59:59", "+00", 0, 1],
		["2041-09-29T02:00:00+00:00", "03:00:00", "+01", -60, 0]
	]),

	"2042" : helpers.makeTestYear("Africa/Casablanca", [
		["2042-08-10T01:59:59+00:00", "02:59:59", "+01", -60, 0],
		["2042-08-10T02:00:00+00:00", "02:00:00", "+00", 0, 1],
		["2042-09-21T01:59:59+00:00", "01:59:59", "+00", 0, 1],
		["2042-09-21T02:00:00+00:00", "03:00:00", "+01", -60, 0]
	]),

	"2043" : helpers.makeTestYear("Africa/Casablanca", [
		["2043-08-02T01:59:59+00:00", "02:59:59", "+01", -60, 0],
		["2043-08-02T02:00:00+00:00", "02:00:00", "+00", 0, 1],
		["2043-09-13T01:59:59+00:00", "01:59:59", "+00", 0, 1],
		["2043-09-13T02:00:00+00:00", "03:00:00", "+01", -60, 0]
	]),

	"2044" : helpers.makeTestYear("Africa/Casablanca", [
		["2044-07-24T01:59:59+00:00", "02:59:59", "+01", -60, 0],
		["2044-07-24T02:00:00+00:00", "02:00:00", "+00", 0, 1],
		["2044-08-28T01:59:59+00:00", "01:59:59", "+00", 0, 1],
		["2044-08-28T02:00:00+00:00", "03:00:00", "+01", -60, 0]
	]),

	"2045" : helpers.makeTestYear("Africa/Casablanca", [
		["2045-07-09T01:59:59+00:00", "02:59:59", "+01", -60, 0],
		["2045-07-09T02:00:00+00:00", "02:00:00", "+00", 0, 1],
		["2045-08-20T01:59:59+00:00", "01:59:59", "+00", 0, 1],
		["2045-08-20T02:00:00+00:00", "03:00:00", "+01", -60, 0]
	]),

	"2046" : helpers.makeTestYear("Africa/Casablanca", [
		["2046-07-01T01:59:59+00:00", "02:59:59", "+01", -60, 0],
		["2046-07-01T02:00:00+00:00", "02:00:00", "+00", 0, 1],
		["2046-08-12T01:59:59+00:00", "01:59:59", "+00", 0, 1],
		["2046-08-12T02:00:00+00:00", "03:00:00", "+01", -60, 0]
	]),

	"2047" : helpers.makeTestYear("Africa/Casablanca", [
		["2047-06-23T01:59:59+00:00", "02:59:59", "+01", -60, 0],
		["2047-06-23T02:00:00+00:00", "02:00:00", "+00", 0, 1],
		["2047-07-28T01:59:59+00:00", "01:59:59", "+00", 0, 1],
		["2047-07-28T02:00:00+00:00", "03:00:00", "+01", -60, 0]
	]),

	"2048" : helpers.makeTestYear("Africa/Casablanca", [
		["2048-06-07T01:59:59+00:00", "02:59:59", "+01", -60, 0],
		["2048-06-07T02:00:00+00:00", "02:00:00", "+00", 0, 1],
		["2048-07-19T01:59:59+00:00", "01:59:59", "+00", 0, 1],
		["2048-07-19T02:00:00+00:00", "03:00:00", "+01", -60, 0]
	]),

	"2049" : helpers.makeTestYear("Africa/Casablanca", [
		["2049-05-30T01:59:59+00:00", "02:59:59", "+01", -60, 0],
		["2049-05-30T02:00:00+00:00", "02:00:00", "+00", 0, 1],
		["2049-07-04T01:59:59+00:00", "01:59:59", "+00", 0, 1],
		["2049-07-04T02:00:00+00:00", "03:00:00", "+01", -60, 0]
	]),

	"2050" : helpers.makeTestYear("Africa/Casablanca", [
		["2050-05-15T01:59:59+00:00", "02:59:59", "+01", -60, 0],
		["2050-05-15T02:00:00+00:00", "02:00:00", "+00", 0, 1],
		["2050-06-26T01:59:59+00:00", "01:59:59", "+00", 0, 1],
		["2050-06-26T02:00:00+00:00", "03:00:00", "+01", -60, 0]
	]),

	"2051" : helpers.makeTestYear("Africa/Casablanca", [
		["2051-05-07T01:59:59+00:00", "02:59:59", "+01", -60, 0],
		["2051-05-07T02:00:00+00:00", "02:00:00", "+00", 0, 1],
		["2051-06-18T01:59:59+00:00", "01:59:59", "+00", 0, 1],
		["2051-06-18T02:00:00+00:00", "03:00:00", "+01", -60, 0]
	]),

	"2052" : helpers.makeTestYear("Africa/Casablanca", [
		["2052-04-28T01:59:59+00:00", "02:59:59", "+01", -60, 0],
		["2052-04-28T02:00:00+00:00", "02:00:00", "+00", 0, 1],
		["2052-06-02T01:59:59+00:00", "01:59:59", "+00", 0, 1],
		["2052-06-02T02:00:00+00:00", "03:00:00", "+01", -60, 0]
	]),

	"2053" : helpers.makeTestYear("Africa/Casablanca", [
		["2053-04-13T01:59:59+00:00", "02:59:59", "+01", -60, 0],
		["2053-04-13T02:00:00+00:00", "02:00:00", "+00", 0, 1],
		["2053-05-25T01:59:59+00:00", "01:59:59", "+00", 0, 1],
		["2053-05-25T02:00:00+00:00", "03:00:00", "+01", -60, 0]
	]),

	"2054" : helpers.makeTestYear("Africa/Casablanca", [
		["2054-04-05T01:59:59+00:00", "02:59:59", "+01", -60, 0],
		["2054-04-05T02:00:00+00:00", "02:00:00", "+00", 0, 1],
		["2054-05-17T01:59:59+00:00", "01:59:59", "+00", 0, 1],
		["2054-05-17T02:00:00+00:00", "03:00:00", "+01", -60, 0]
	]),

	"2055" : helpers.makeTestYear("Africa/Casablanca", [
		["2055-03-28T01:59:59+00:00", "02:59:59", "+01", -60, 0],
		["2055-03-28T02:00:00+00:00", "02:00:00", "+00", 0, 1],
		["2055-05-02T01:59:59+00:00", "01:59:59", "+00", 0, 1],
		["2055-05-02T02:00:00+00:00", "03:00:00", "+01", -60, 0]
	]),

	"2056" : helpers.makeTestYear("Africa/Casablanca", [
		["2056-03-12T01:59:59+00:00", "02:59:59", "+01", -60, 0],
		["2056-03-12T02:00:00+00:00", "02:00:00", "+00", 0, 1],
		["2056-04-23T01:59:59+00:00", "01:59:59", "+00", 0, 1],
		["2056-04-23T02:00:00+00:00", "03:00:00", "+01", -60, 0]
	]),

	"2057" : helpers.makeTestYear("Africa/Casablanca", [
		["2057-03-04T01:59:59+00:00", "02:59:59", "+01", -60, 0],
		["2057-03-04T02:00:00+00:00", "02:00:00", "+00", 0, 1],
		["2057-04-08T01:59:59+00:00", "01:59:59", "+00", 0, 1],
		["2057-04-08T02:00:00+00:00", "03:00:00", "+01", -60, 0]
	]),

	"2058" : helpers.makeTestYear("Africa/Casablanca", [
		["2058-02-17T01:59:59+00:00", "02:59:59", "+01", -60, 0],
		["2058-02-17T02:00:00+00:00", "02:00:00", "+00", 0, 1],
		["2058-03-31T01:59:59+00:00", "01:59:59", "+00", 0, 1],
		["2058-03-31T02:00:00+00:00", "03:00:00", "+01", -60, 0]
	]),

	"2059" : helpers.makeTestYear("Africa/Casablanca", [
		["2059-02-09T01:59:59+00:00", "02:59:59", "+01", -60, 0],
		["2059-02-09T02:00:00+00:00", "02:00:00", "+00", 0, 1],
		["2059-03-23T01:59:59+00:00", "01:59:59", "+00", 0, 1],
		["2059-03-23T02:00:00+00:00", "03:00:00", "+01", -60, 0]
	]),

	"2060" : helpers.makeTestYear("Africa/Casablanca", [
		["2060-02-01T01:59:59+00:00", "02:59:59", "+01", -60, 0],
		["2060-02-01T02:00:00+00:00", "02:00:00", "+00", 0, 1],
		["2060-03-07T01:59:59+00:00", "01:59:59", "+00", 0, 1],
		["2060-03-07T02:00:00+00:00", "03:00:00", "+01", -60, 0]
	]),

	"2061" : helpers.makeTestYear("Africa/Casablanca", [
		["2061-01-16T01:59:59+00:00", "02:59:59", "+01", -60, 0],
		["2061-01-16T02:00:00+00:00", "02:00:00", "+00", 0, 1],
		["2061-02-27T01:59:59+00:00", "01:59:59", "+00", 0, 1],
		["2061-02-27T02:00:00+00:00", "03:00:00", "+01", -60, 0]
	]),

	"2062" : helpers.makeTestYear("Africa/Casablanca", [
		["2062-01-08T01:59:59+00:00", "02:59:59", "+01", -60, 0],
		["2062-01-08T02:00:00+00:00", "02:00:00", "+00", 0, 1],
		["2062-02-19T01:59:59+00:00", "01:59:59", "+00", 0, 1],
		["2062-02-19T02:00:00+00:00", "03:00:00", "+01", -60, 0],
		["2062-12-31T01:59:59+00:00", "02:59:59", "+01", -60, 0],
		["2062-12-31T02:00:00+00:00", "02:00:00", "+00", 0, 1]
	]),

	"2063" : helpers.makeTestYear("Africa/Casablanca", [
		["2063-02-04T01:59:59+00:00", "01:59:59", "+00", 0, 1],
		["2063-02-04T02:00:00+00:00", "03:00:00", "+01", -60, 0],
		["2063-12-16T01:59:59+00:00", "02:59:59", "+01", -60, 0],
		["2063-12-16T02:00:00+00:00", "02:00:00", "+00", 0, 1]
	]),

	"2064" : helpers.makeTestYear("Africa/Casablanca", [
		["2064-01-27T01:59:59+00:00", "01:59:59", "+00", 0, 1],
		["2064-01-27T02:00:00+00:00", "03:00:00", "+01", -60, 0],
		["2064-12-07T01:59:59+00:00", "02:59:59", "+01", -60, 0],
		["2064-12-07T02:00:00+00:00", "02:00:00", "+00", 0, 1]
	]),

	"2065" : helpers.makeTestYear("Africa/Casablanca", [
		["2065-01-11T01:59:59+00:00", "01:59:59", "+00", 0, 1],
		["2065-01-11T02:00:00+00:00", "03:00:00", "+01", -60, 0],
		["2065-11-22T01:59:59+00:00", "02:59:59", "+01", -60, 0],
		["2065-11-22T02:00:00+00:00", "02:00:00", "+00", 0, 1]
	]),

	"2066" : helpers.makeTestYear("Africa/Casablanca", [
		["2066-01-03T01:59:59+00:00", "01:59:59", "+00", 0, 1],
		["2066-01-03T02:00:00+00:00", "03:00:00", "+01", -60, 0],
		["2066-11-14T01:59:59+00:00", "02:59:59", "+01", -60, 0],
		["2066-11-14T02:00:00+00:00", "02:00:00", "+00", 0, 1],
		["2066-12-26T01:59:59+00:00", "01:59:59", "+00", 0, 1],
		["2066-12-26T02:00:00+00:00", "03:00:00", "+01", -60, 0]
	]),

	"2067" : helpers.makeTestYear("Africa/Casablanca", [
		["2067-11-06T01:59:59+00:00", "02:59:59", "+01", -60, 0],
		["2067-11-06T02:00:00+00:00", "02:00:00", "+00", 0, 1],
		["2067-12-11T01:59:59+00:00", "01:59:59", "+00", 0, 1],
		["2067-12-11T02:00:00+00:00", "03:00:00", "+01", -60, 0]
	]),

	"2068" : helpers.makeTestYear("Africa/Casablanca", [
		["2068-10-21T01:59:59+00:00", "02:59:59", "+01", -60, 0],
		["2068-10-21T02:00:00+00:00", "02:00:00", "+00", 0, 1],
		["2068-12-02T01:59:59+00:00", "01:59:59", "+00", 0, 1],
		["2068-12-02T02:00:00+00:00", "03:00:00", "+01", -60, 0]
	]),

	"2069" : helpers.makeTestYear("Africa/Casablanca", [
		["2069-10-13T01:59:59+00:00", "02:59:59", "+01", -60, 0],
		["2069-10-13T02:00:00+00:00", "02:00:00", "+00", 0, 1],
		["2069-11-24T01:59:59+00:00", "01:59:59", "+00", 0, 1],
		["2069-11-24T02:00:00+00:00", "03:00:00", "+01", -60, 0]
	]),

	"2070" : helpers.makeTestYear("Africa/Casablanca", [
		["2070-10-05T01:59:59+00:00", "02:59:59", "+01", -60, 0],
		["2070-10-05T02:00:00+00:00", "02:00:00", "+00", 0, 1],
		["2070-11-09T01:59:59+00:00", "01:59:59", "+00", 0, 1],
		["2070-11-09T02:00:00+00:00", "03:00:00", "+01", -60, 0]
	]),

	"2071" : helpers.makeTestYear("Africa/Casablanca", [
		["2071-09-20T01:59:59+00:00", "02:59:59", "+01", -60, 0],
		["2071-09-20T02:00:00+00:00", "02:00:00", "+00", 0, 1],
		["2071-11-01T01:59:59+00:00", "01:59:59", "+00", 0, 1],
		["2071-11-01T02:00:00+00:00", "03:00:00", "+01", -60, 0]
	]),

	"2072" : helpers.makeTestYear("Africa/Casablanca", [
		["2072-09-11T01:59:59+00:00", "02:59:59", "+01", -60, 0],
		["2072-09-11T02:00:00+00:00", "02:00:00", "+00", 0, 1],
		["2072-10-16T01:59:59+00:00", "01:59:59", "+00", 0, 1],
		["2072-10-16T02:00:00+00:00", "03:00:00", "+01", -60, 0]
	]),

	"2073" : helpers.makeTestYear("Africa/Casablanca", [
		["2073-08-27T01:59:59+00:00", "02:59:59", "+01", -60, 0],
		["2073-08-27T02:00:00+00:00", "02:00:00", "+00", 0, 1],
		["2073-10-08T01:59:59+00:00", "01:59:59", "+00", 0, 1],
		["2073-10-08T02:00:00+00:00", "03:00:00", "+01", -60, 0]
	]),

	"2074" : helpers.makeTestYear("Africa/Casablanca", [
		["2074-08-19T01:59:59+00:00", "02:59:59", "+01", -60, 0],
		["2074-08-19T02:00:00+00:00", "02:00:00", "+00", 0, 1],
		["2074-09-30T01:59:59+00:00", "01:59:59", "+00", 0, 1],
		["2074-09-30T02:00:00+00:00", "03:00:00", "+01", -60, 0]
	]),

	"2075" : helpers.makeTestYear("Africa/Casablanca", [
		["2075-08-11T01:59:59+00:00", "02:59:59", "+01", -60, 0],
		["2075-08-11T02:00:00+00:00", "02:00:00", "+00", 0, 1],
		["2075-09-15T01:59:59+00:00", "01:59:59", "+00", 0, 1],
		["2075-09-15T02:00:00+00:00", "03:00:00", "+01", -60, 0]
	]),

	"2076" : helpers.makeTestYear("Africa/Casablanca", [
		["2076-07-26T01:59:59+00:00", "02:59:59", "+01", -60, 0],
		["2076-07-26T02:00:00+00:00", "02:00:00", "+00", 0, 1],
		["2076-09-06T01:59:59+00:00", "01:59:59", "+00", 0, 1],
		["2076-09-06T02:00:00+00:00", "03:00:00", "+01", -60, 0]
	]),

	"2077" : helpers.makeTestYear("Africa/Casablanca", [
		["2077-07-18T01:59:59+00:00", "02:59:59", "+01", -60, 0],
		["2077-07-18T02:00:00+00:00", "02:00:00", "+00", 0, 1],
		["2077-08-29T01:59:59+00:00", "01:59:59", "+00", 0, 1],
		["2077-08-29T02:00:00+00:00", "03:00:00", "+01", -60, 0]
	]),

	"2078" : helpers.makeTestYear("Africa/Casablanca", [
		["2078-07-10T01:59:59+00:00", "02:59:59", "+01", -60, 0],
		["2078-07-10T02:00:00+00:00", "02:00:00", "+00", 0, 1],
		["2078-08-14T01:59:59+00:00", "01:59:59", "+00", 0, 1],
		["2078-08-14T02:00:00+00:00", "03:00:00", "+01", -60, 0]
	]),

	"2079" : helpers.makeTestYear("Africa/Casablanca", [
		["2079-06-25T01:59:59+00:00", "02:59:59", "+01", -60, 0],
		["2079-06-25T02:00:00+00:00", "02:00:00", "+00", 0, 1],
		["2079-08-06T01:59:59+00:00", "01:59:59", "+00", 0, 1],
		["2079-08-06T02:00:00+00:00", "03:00:00", "+01", -60, 0]
	]),

	"2080" : helpers.makeTestYear("Africa/Casablanca", [
		["2080-06-16T01:59:59+00:00", "02:59:59", "+01", -60, 0],
		["2080-06-16T02:00:00+00:00", "02:00:00", "+00", 0, 1],
		["2080-07-21T01:59:59+00:00", "01:59:59", "+00", 0, 1],
		["2080-07-21T02:00:00+00:00", "03:00:00", "+01", -60, 0]
	]),

	"2081" : helpers.makeTestYear("Africa/Casablanca", [
		["2081-06-01T01:59:59+00:00", "02:59:59", "+01", -60, 0],
		["2081-06-01T02:00:00+00:00", "02:00:00", "+00", 0, 1],
		["2081-07-13T01:59:59+00:00", "01:59:59", "+00", 0, 1],
		["2081-07-13T02:00:00+00:00", "03:00:00", "+01", -60, 0]
	]),

	"2082" : helpers.makeTestYear("Africa/Casablanca", [
		["2082-05-24T01:59:59+00:00", "02:59:59", "+01", -60, 0],
		["2082-05-24T02:00:00+00:00", "02:00:00", "+00", 0, 1],
		["2082-07-05T01:59:59+00:00", "01:59:59", "+00", 0, 1],
		["2082-07-05T02:00:00+00:00", "03:00:00", "+01", -60, 0]
	]),

	"2083" : helpers.makeTestYear("Africa/Casablanca", [
		["2083-05-16T01:59:59+00:00", "02:59:59", "+01", -60, 0],
		["2083-05-16T02:00:00+00:00", "02:00:00", "+00", 0, 1],
		["2083-06-20T01:59:59+00:00", "01:59:59", "+00", 0, 1],
		["2083-06-20T02:00:00+00:00", "03:00:00", "+01", -60, 0]
	]),

	"2084" : helpers.makeTestYear("Africa/Casablanca", [
		["2084-04-30T01:59:59+00:00", "02:59:59", "+01", -60, 0],
		["2084-04-30T02:00:00+00:00", "02:00:00", "+00", 0, 1],
		["2084-06-11T01:59:59+00:00", "01:59:59", "+00", 0, 1],
		["2084-06-11T02:00:00+00:00", "03:00:00", "+01", -60, 0]
	]),

	"2085" : helpers.makeTestYear("Africa/Casablanca", [
		["2085-04-22T01:59:59+00:00", "02:59:59", "+01", -60, 0],
		["2085-04-22T02:00:00+00:00", "02:00:00", "+00", 0, 1],
		["2085-06-03T01:59:59+00:00", "01:59:59", "+00", 0, 1],
		["2085-06-03T02:00:00+00:00", "03:00:00", "+01", -60, 0]
	]),

	"2086" : helpers.makeTestYear("Africa/Casablanca", [
		["2086-04-14T01:59:59+00:00", "02:59:59", "+01", -60, 0],
		["2086-04-14T02:00:00+00:00", "02:00:00", "+00", 0, 1],
		["2086-05-19T01:59:59+00:00", "01:59:59", "+00", 0, 1],
		["2086-05-19T02:00:00+00:00", "03:00:00", "+01", -60, 0]
	]),

	"2087" : helpers.makeTestYear("Africa/Casablanca", [
		["2087-03-30T01:59:59+00:00", "02:59:59", "+01", -60, 0],
		["2087-03-30T02:00:00+00:00", "02:00:00", "+00", 0, 1]
	])
};