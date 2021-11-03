"use strict";

var helpers = require("../../../helpers/helpers");

exports["America/Argentina/La_Rioja"] = {

	"guess:by:offset" : helpers.makeTestGuess("America/Argentina/La_Rioja", { offset: true, expect: "America/Fortaleza" }),

	"guess:by:abbr" : helpers.makeTestGuess("America/Argentina/La_Rioja", { abbr: true, expect: "America/Fortaleza" }),

	"1920" : helpers.makeTestYear("America/Argentina/La_Rioja", [
		["1920-05-01T04:16:47+00:00", "23:59:59", "CMT", 15408 / 60, 0],
		["1920-05-01T04:16:48+00:00", "00:16:48", "-04", 240, 0]
	]),

	"1930" : helpers.makeTestYear("America/Argentina/La_Rioja", [
		["1930-12-01T03:59:59+00:00", "23:59:59", "-04", 240, 0],
		["1930-12-01T04:00:00+00:00", "01:00:00", "-03", 180, 1]
	]),

	"1931" : helpers.makeTestYear("America/Argentina/La_Rioja", [
		["1931-04-01T02:59:59+00:00", "23:59:59", "-03", 180, 1],
		["1931-04-01T03:00:00+00:00", "23:00:00", "-04", 240, 0],
		["1931-10-15T03:59:59+00:00", "23:59:59", "-04", 240, 0],
		["1931-10-15T04:00:00+00:00", "01:00:00", "-03", 180, 1]
	]),

	"1932" : helpers.makeTestYear("America/Argentina/La_Rioja", [
		["1932-03-01T02:59:59+00:00", "23:59:59", "-03", 180, 1],
		["1932-03-01T03:00:00+00:00", "23:00:00", "-04", 240, 0],
		["1932-11-01T03:59:59+00:00", "23:59:59", "-04", 240, 0],
		["1932-11-01T04:00:00+00:00", "01:00:00", "-03", 180, 1]
	]),

	"1933" : helpers.makeTestYear("America/Argentina/La_Rioja", [
		["1933-03-01T02:59:59+00:00", "23:59:59", "-03", 180, 1],
		["1933-03-01T03:00:00+00:00", "23:00:00", "-04", 240, 0],
		["1933-11-01T03:59:59+00:00", "23:59:59", "-04", 240, 0],
		["1933-11-01T04:00:00+00:00", "01:00:00", "-03", 180, 1]
	]),

	"1934" : helpers.makeTestYear("America/Argentina/La_Rioja", [
		["1934-03-01T02:59:59+00:00", "23:59:59", "-03", 180, 1],
		["1934-03-01T03:00:00+00:00", "23:00:00", "-04", 240, 0],
		["1934-11-01T03:59:59+00:00", "23:59:59", "-04", 240, 0],
		["1934-11-01T04:00:00+00:00", "01:00:00", "-03", 180, 1]
	]),

	"1935" : helpers.makeTestYear("America/Argentina/La_Rioja", [
		["1935-03-01T02:59:59+00:00", "23:59:59", "-03", 180, 1],
		["1935-03-01T03:00:00+00:00", "23:00:00", "-04", 240, 0],
		["1935-11-01T03:59:59+00:00", "23:59:59", "-04", 240, 0],
		["1935-11-01T04:00:00+00:00", "01:00:00", "-03", 180, 1]
	]),

	"1936" : helpers.makeTestYear("America/Argentina/La_Rioja", [
		["1936-03-01T02:59:59+00:00", "23:59:59", "-03", 180, 1],
		["1936-03-01T03:00:00+00:00", "23:00:00", "-04", 240, 0],
		["1936-11-01T03:59:59+00:00", "23:59:59", "-04", 240, 0],
		["1936-11-01T04:00:00+00:00", "01:00:00", "-03", 180, 1]
	]),

	"1937" : helpers.makeTestYear("America/Argentina/La_Rioja", [
		["1937-03-01T02:59:59+00:00", "23:59:59", "-03", 180, 1],
		["1937-03-01T03:00:00+00:00", "23:00:00", "-04", 240, 0],
		["1937-11-01T03:59:59+00:00", "23:59:59", "-04", 240, 0],
		["1937-11-01T04:00:00+00:00", "01:00:00", "-03", 180, 1]
	]),

	"1938" : helpers.makeTestYear("America/Argentina/La_Rioja", [
		["1938-03-01T02:59:59+00:00", "23:59:59", "-03", 180, 1],
		["1938-03-01T03:00:00+00:00", "23:00:00", "-04", 240, 0],
		["1938-11-01T03:59:59+00:00", "23:59:59", "-04", 240, 0],
		["1938-11-01T04:00:00+00:00", "01:00:00", "-03", 180, 1]
	]),

	"1939" : helpers.makeTestYear("America/Argentina/La_Rioja", [
		["1939-03-01T02:59:59+00:00", "23:59:59", "-03", 180, 1],
		["1939-03-01T03:00:00+00:00", "23:00:00", "-04", 240, 0],
		["1939-11-01T03:59:59+00:00", "23:59:59", "-04", 240, 0],
		["1939-11-01T04:00:00+00:00", "01:00:00", "-03", 180, 1]
	]),

	"1940" : helpers.makeTestYear("America/Argentina/La_Rioja", [
		["1940-03-01T02:59:59+00:00", "23:59:59", "-03", 180, 1],
		["1940-03-01T03:00:00+00:00", "23:00:00", "-04", 240, 0],
		["1940-07-01T03:59:59+00:00", "23:59:59", "-04", 240, 0],
		["1940-07-01T04:00:00+00:00", "01:00:00", "-03", 180, 1]
	]),

	"1941" : helpers.makeTestYear("America/Argentina/La_Rioja", [
		["1941-06-15T02:59:59+00:00", "23:59:59", "-03", 180, 1],
		["1941-06-15T03:00:00+00:00", "23:00:00", "-04", 240, 0],
		["1941-10-15T03:59:59+00:00", "23:59:59", "-04", 240, 0],
		["1941-10-15T04:00:00+00:00", "01:00:00", "-03", 180, 1]
	]),

	"1943" : helpers.makeTestYear("America/Argentina/La_Rioja", [
		["1943-08-01T02:59:59+00:00", "23:59:59", "-03", 180, 1],
		["1943-08-01T03:00:00+00:00", "23:00:00", "-04", 240, 0],
		["1943-10-15T03:59:59+00:00", "23:59:59", "-04", 240, 0],
		["1943-10-15T04:00:00+00:00", "01:00:00", "-03", 180, 1]
	]),

	"1946" : helpers.makeTestYear("America/Argentina/La_Rioja", [
		["1946-03-01T02:59:59+00:00", "23:59:59", "-03", 180, 1],
		["1946-03-01T03:00:00+00:00", "23:00:00", "-04", 240, 0],
		["1946-10-01T03:59:59+00:00", "23:59:59", "-04", 240, 0],
		["1946-10-01T04:00:00+00:00", "01:00:00", "-03", 180, 1]
	]),

	"1963" : helpers.makeTestYear("America/Argentina/La_Rioja", [
		["1963-10-01T02:59:59+00:00", "23:59:59", "-03", 180, 1],
		["1963-10-01T03:00:00+00:00", "23:00:00", "-04", 240, 0],
		["1963-12-15T03:59:59+00:00", "23:59:59", "-04", 240, 0],
		["1963-12-15T04:00:00+00:00", "01:00:00", "-03", 180, 1]
	]),

	"1964" : helpers.makeTestYear("America/Argentina/La_Rioja", [
		["1964-03-01T02:59:59+00:00", "23:59:59", "-03", 180, 1],
		["1964-03-01T03:00:00+00:00", "23:00:00", "-04", 240, 0],
		["1964-10-15T03:59:59+00:00", "23:59:59", "-04", 240, 0],
		["1964-10-15T04:00:00+00:00", "01:00:00", "-03", 180, 1]
	]),

	"1965" : helpers.makeTestYear("America/Argentina/La_Rioja", [
		["1965-03-01T02:59:59+00:00", "23:59:59", "-03", 180, 1],
		["1965-03-01T03:00:00+00:00", "23:00:00", "-04", 240, 0],
		["1965-10-15T03:59:59+00:00", "23:59:59", "-04", 240, 0],
		["1965-10-15T04:00:00+00:00", "01:00:00", "-03", 180, 1]
	]),

	"1966" : helpers.makeTestYear("America/Argentina/La_Rioja", [
		["1966-03-01T02:59:59+00:00", "23:59:59", "-03", 180, 1],
		["1966-03-01T03:00:00+00:00", "23:00:00", "-04", 240, 0],
		["1966-10-15T03:59:59+00:00", "23:59:59", "-04", 240, 0],
		["1966-10-15T04:00:00+00:00", "01:00:00", "-03", 180, 1]
	]),

	"1967" : helpers.makeTestYear("America/Argentina/La_Rioja", [
		["1967-04-02T02:59:59+00:00", "23:59:59", "-03", 180, 1],
		["1967-04-02T03:00:00+00:00", "23:00:00", "-04", 240, 0],
		["1967-10-01T03:59:59+00:00", "23:59:59", "-04", 240, 0],
		["1967-10-01T04:00:00+00:00", "01:00:00", "-03", 180, 1]
	]),

	"1968" : helpers.makeTestYear("America/Argentina/La_Rioja", [
		["1968-04-07T02:59:59+00:00", "23:59:59", "-03", 180, 1],
		["1968-04-07T03:00:00+00:00", "23:00:00", "-04", 240, 0],
		["1968-10-06T03:59:59+00:00", "23:59:59", "-04", 240, 0],
		["1968-10-06T04:00:00+00:00", "01:00:00", "-03", 180, 1]
	]),

	"1969" : helpers.makeTestYear("America/Argentina/La_Rioja", [
		["1969-04-06T02:59:59+00:00", "23:59:59", "-03", 180, 1],
		["1969-04-06T03:00:00+00:00", "23:00:00", "-04", 240, 0],
		["1969-10-05T03:59:59+00:00", "23:59:59", "-04", 240, 0],
		["1969-10-05T04:00:00+00:00", "01:00:00", "-03", 180, 0]
	]),

	"1974" : helpers.makeTestYear("America/Argentina/La_Rioja", [
		["1974-01-23T02:59:59+00:00", "23:59:59", "-03", 180, 0],
		["1974-01-23T03:00:00+00:00", "01:00:00", "-02", 120, 1],
		["1974-05-01T01:59:59+00:00", "23:59:59", "-02", 120, 1],
		["1974-05-01T02:00:00+00:00", "23:00:00", "-03", 180, 0]
	]),

	"1988" : helpers.makeTestYear("America/Argentina/La_Rioja", [
		["1988-12-01T02:59:59+00:00", "23:59:59", "-03", 180, 0],
		["1988-12-01T03:00:00+00:00", "01:00:00", "-02", 120, 1]
	]),

	"1989" : helpers.makeTestYear("America/Argentina/La_Rioja", [
		["1989-03-05T01:59:59+00:00", "23:59:59", "-02", 120, 1],
		["1989-03-05T02:00:00+00:00", "23:00:00", "-03", 180, 0],
		["1989-10-15T02:59:59+00:00", "23:59:59", "-03", 180, 0],
		["1989-10-15T03:00:00+00:00", "01:00:00", "-02", 120, 1]
	]),

	"1990" : helpers.makeTestYear("America/Argentina/La_Rioja", [
		["1990-03-04T01:59:59+00:00", "23:59:59", "-02", 120, 1],
		["1990-03-04T02:00:00+00:00", "23:00:00", "-03", 180, 0],
		["1990-10-21T02:59:59+00:00", "23:59:59", "-03", 180, 0],
		["1990-10-21T03:00:00+00:00", "01:00:00", "-02", 120, 1]
	]),

	"1991" : helpers.makeTestYear("America/Argentina/La_Rioja", [
		["1991-03-01T01:59:59+00:00", "23:59:59", "-02", 120, 1],
		["1991-03-01T02:00:00+00:00", "22:00:00", "-04", 240, 0],
		["1991-05-07T03:59:59+00:00", "23:59:59", "-04", 240, 0],
		["1991-05-07T04:00:00+00:00", "01:00:00", "-03", 180, 0],
		["1991-10-20T02:59:59+00:00", "23:59:59", "-03", 180, 0],
		["1991-10-20T03:00:00+00:00", "01:00:00", "-02", 120, 1]
	]),

	"1992" : helpers.makeTestYear("America/Argentina/La_Rioja", [
		["1992-03-01T01:59:59+00:00", "23:59:59", "-02", 120, 1],
		["1992-03-01T02:00:00+00:00", "23:00:00", "-03", 180, 0],
		["1992-10-18T02:59:59+00:00", "23:59:59", "-03", 180, 0],
		["1992-10-18T03:00:00+00:00", "01:00:00", "-02", 120, 1]
	]),

	"1993" : helpers.makeTestYear("America/Argentina/La_Rioja", [
		["1993-03-07T01:59:59+00:00", "23:59:59", "-02", 120, 1],
		["1993-03-07T02:00:00+00:00", "23:00:00", "-03", 180, 0]
	]),

	"1999" : helpers.makeTestYear("America/Argentina/La_Rioja", [
		["1999-10-03T02:59:59+00:00", "23:59:59", "-03", 180, 0],
		["1999-10-03T03:00:00+00:00", "00:00:00", "-03", 180, 1]
	]),

	"2000" : helpers.makeTestYear("America/Argentina/La_Rioja", [
		["2000-03-03T02:59:59+00:00", "23:59:59", "-03", 180, 1],
		["2000-03-03T03:00:00+00:00", "00:00:00", "-03", 180, 0]
	]),

	"2004" : helpers.makeTestYear("America/Argentina/La_Rioja", [
		["2004-06-01T02:59:59+00:00", "23:59:59", "-03", 180, 0],
		["2004-06-01T03:00:00+00:00", "23:00:00", "-04", 240, 0],
		["2004-06-20T03:59:59+00:00", "23:59:59", "-04", 240, 0],
		["2004-06-20T04:00:00+00:00", "01:00:00", "-03", 180, 0]
	]),

	"2007" : helpers.makeTestYear("America/Argentina/La_Rioja", [
		["2007-12-30T02:59:59+00:00", "23:59:59", "-03", 180, 0],
		["2007-12-30T03:00:00+00:00", "01:00:00", "-02", 120, 1]
	])
};