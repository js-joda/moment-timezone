"use strict";

var helpers = require("../../helpers/helpers");

exports["America/Manaus"] = {

	"guess:by:offset" : helpers.makeTestGuess("America/Manaus", { offset: true, expect: "America/Santo_Domingo" }),

	"guess:by:abbr" : helpers.makeTestGuess("America/Manaus", { abbr: true, expect: "America/Santo_Domingo" }),

	"1931" : helpers.makeTestYear("America/Manaus", [
		["1931-10-03T14:59:59+00:00", "10:59:59", "-04", 240, 0],
		["1931-10-03T15:00:00+00:00", "12:00:00", "-03", 180, 1]
	]),

	"1932" : helpers.makeTestYear("America/Manaus", [
		["1932-04-01T02:59:59+00:00", "23:59:59", "-03", 180, 1],
		["1932-04-01T03:00:00+00:00", "23:00:00", "-04", 240, 0],
		["1932-10-03T03:59:59+00:00", "23:59:59", "-04", 240, 0],
		["1932-10-03T04:00:00+00:00", "01:00:00", "-03", 180, 1]
	]),

	"1933" : helpers.makeTestYear("America/Manaus", [
		["1933-04-01T02:59:59+00:00", "23:59:59", "-03", 180, 1],
		["1933-04-01T03:00:00+00:00", "23:00:00", "-04", 240, 0]
	]),

	"1949" : helpers.makeTestYear("America/Manaus", [
		["1949-12-01T03:59:59+00:00", "23:59:59", "-04", 240, 0],
		["1949-12-01T04:00:00+00:00", "01:00:00", "-03", 180, 1]
	]),

	"1950" : helpers.makeTestYear("America/Manaus", [
		["1950-04-16T03:59:59+00:00", "00:59:59", "-03", 180, 1],
		["1950-04-16T04:00:00+00:00", "00:00:00", "-04", 240, 0],
		["1950-12-01T03:59:59+00:00", "23:59:59", "-04", 240, 0],
		["1950-12-01T04:00:00+00:00", "01:00:00", "-03", 180, 1]
	]),

	"1951" : helpers.makeTestYear("America/Manaus", [
		["1951-04-01T02:59:59+00:00", "23:59:59", "-03", 180, 1],
		["1951-04-01T03:00:00+00:00", "23:00:00", "-04", 240, 0],
		["1951-12-01T03:59:59+00:00", "23:59:59", "-04", 240, 0],
		["1951-12-01T04:00:00+00:00", "01:00:00", "-03", 180, 1]
	]),

	"1952" : helpers.makeTestYear("America/Manaus", [
		["1952-04-01T02:59:59+00:00", "23:59:59", "-03", 180, 1],
		["1952-04-01T03:00:00+00:00", "23:00:00", "-04", 240, 0],
		["1952-12-01T03:59:59+00:00", "23:59:59", "-04", 240, 0],
		["1952-12-01T04:00:00+00:00", "01:00:00", "-03", 180, 1]
	]),

	"1953" : helpers.makeTestYear("America/Manaus", [
		["1953-03-01T02:59:59+00:00", "23:59:59", "-03", 180, 1],
		["1953-03-01T03:00:00+00:00", "23:00:00", "-04", 240, 0]
	]),

	"1963" : helpers.makeTestYear("America/Manaus", [
		["1963-12-09T03:59:59+00:00", "23:59:59", "-04", 240, 0],
		["1963-12-09T04:00:00+00:00", "01:00:00", "-03", 180, 1]
	]),

	"1964" : helpers.makeTestYear("America/Manaus", [
		["1964-03-01T02:59:59+00:00", "23:59:59", "-03", 180, 1],
		["1964-03-01T03:00:00+00:00", "23:00:00", "-04", 240, 0]
	]),

	"1965" : helpers.makeTestYear("America/Manaus", [
		["1965-01-31T03:59:59+00:00", "23:59:59", "-04", 240, 0],
		["1965-01-31T04:00:00+00:00", "01:00:00", "-03", 180, 1],
		["1965-03-31T02:59:59+00:00", "23:59:59", "-03", 180, 1],
		["1965-03-31T03:00:00+00:00", "23:00:00", "-04", 240, 0],
		["1965-12-01T03:59:59+00:00", "23:59:59", "-04", 240, 0],
		["1965-12-01T04:00:00+00:00", "01:00:00", "-03", 180, 1]
	]),

	"1966" : helpers.makeTestYear("America/Manaus", [
		["1966-03-01T02:59:59+00:00", "23:59:59", "-03", 180, 1],
		["1966-03-01T03:00:00+00:00", "23:00:00", "-04", 240, 0],
		["1966-11-01T03:59:59+00:00", "23:59:59", "-04", 240, 0],
		["1966-11-01T04:00:00+00:00", "01:00:00", "-03", 180, 1]
	]),

	"1967" : helpers.makeTestYear("America/Manaus", [
		["1967-03-01T02:59:59+00:00", "23:59:59", "-03", 180, 1],
		["1967-03-01T03:00:00+00:00", "23:00:00", "-04", 240, 0],
		["1967-11-01T03:59:59+00:00", "23:59:59", "-04", 240, 0],
		["1967-11-01T04:00:00+00:00", "01:00:00", "-03", 180, 1]
	]),

	"1968" : helpers.makeTestYear("America/Manaus", [
		["1968-03-01T02:59:59+00:00", "23:59:59", "-03", 180, 1],
		["1968-03-01T03:00:00+00:00", "23:00:00", "-04", 240, 0]
	]),

	"1985" : helpers.makeTestYear("America/Manaus", [
		["1985-11-02T03:59:59+00:00", "23:59:59", "-04", 240, 0],
		["1985-11-02T04:00:00+00:00", "01:00:00", "-03", 180, 1]
	]),

	"1986" : helpers.makeTestYear("America/Manaus", [
		["1986-03-15T02:59:59+00:00", "23:59:59", "-03", 180, 1],
		["1986-03-15T03:00:00+00:00", "23:00:00", "-04", 240, 0],
		["1986-10-25T03:59:59+00:00", "23:59:59", "-04", 240, 0],
		["1986-10-25T04:00:00+00:00", "01:00:00", "-03", 180, 1]
	]),

	"1987" : helpers.makeTestYear("America/Manaus", [
		["1987-02-14T02:59:59+00:00", "23:59:59", "-03", 180, 1],
		["1987-02-14T03:00:00+00:00", "23:00:00", "-04", 240, 0],
		["1987-10-25T03:59:59+00:00", "23:59:59", "-04", 240, 0],
		["1987-10-25T04:00:00+00:00", "01:00:00", "-03", 180, 1]
	]),

	"1988" : helpers.makeTestYear("America/Manaus", [
		["1988-02-07T02:59:59+00:00", "23:59:59", "-03", 180, 1],
		["1988-02-07T03:00:00+00:00", "23:00:00", "-04", 240, 0]
	]),

	"1993" : helpers.makeTestYear("America/Manaus", [
		["1993-10-17T03:59:59+00:00", "23:59:59", "-04", 240, 0],
		["1993-10-17T04:00:00+00:00", "01:00:00", "-03", 180, 1]
	])
};