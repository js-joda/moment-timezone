"use strict";

var helpers = require("../../helpers/helpers");

exports["America/Noronha"] = {

	"guess:by:offset" : helpers.makeTestGuess("America/Noronha", { offset: true }),

	"guess:by:abbr" : helpers.makeTestGuess("America/Noronha", { abbr: true }),

	"1931" : helpers.makeTestYear("America/Noronha", [
		["1931-10-03T12:59:59+00:00", "10:59:59", "-02", 120, 0],
		["1931-10-03T13:00:00+00:00", "12:00:00", "-01", 60, 1]
	]),

	"1932" : helpers.makeTestYear("America/Noronha", [
		["1932-04-01T00:59:59+00:00", "23:59:59", "-01", 60, 1],
		["1932-04-01T01:00:00+00:00", "23:00:00", "-02", 120, 0],
		["1932-10-03T01:59:59+00:00", "23:59:59", "-02", 120, 0],
		["1932-10-03T02:00:00+00:00", "01:00:00", "-01", 60, 1]
	]),

	"1933" : helpers.makeTestYear("America/Noronha", [
		["1933-04-01T00:59:59+00:00", "23:59:59", "-01", 60, 1],
		["1933-04-01T01:00:00+00:00", "23:00:00", "-02", 120, 0]
	]),

	"1949" : helpers.makeTestYear("America/Noronha", [
		["1949-12-01T01:59:59+00:00", "23:59:59", "-02", 120, 0],
		["1949-12-01T02:00:00+00:00", "01:00:00", "-01", 60, 1]
	]),

	"1950" : helpers.makeTestYear("America/Noronha", [
		["1950-04-16T01:59:59+00:00", "00:59:59", "-01", 60, 1],
		["1950-04-16T02:00:00+00:00", "00:00:00", "-02", 120, 0],
		["1950-12-01T01:59:59+00:00", "23:59:59", "-02", 120, 0],
		["1950-12-01T02:00:00+00:00", "01:00:00", "-01", 60, 1]
	]),

	"1951" : helpers.makeTestYear("America/Noronha", [
		["1951-04-01T00:59:59+00:00", "23:59:59", "-01", 60, 1],
		["1951-04-01T01:00:00+00:00", "23:00:00", "-02", 120, 0],
		["1951-12-01T01:59:59+00:00", "23:59:59", "-02", 120, 0],
		["1951-12-01T02:00:00+00:00", "01:00:00", "-01", 60, 1]
	]),

	"1952" : helpers.makeTestYear("America/Noronha", [
		["1952-04-01T00:59:59+00:00", "23:59:59", "-01", 60, 1],
		["1952-04-01T01:00:00+00:00", "23:00:00", "-02", 120, 0],
		["1952-12-01T01:59:59+00:00", "23:59:59", "-02", 120, 0],
		["1952-12-01T02:00:00+00:00", "01:00:00", "-01", 60, 1]
	]),

	"1953" : helpers.makeTestYear("America/Noronha", [
		["1953-03-01T00:59:59+00:00", "23:59:59", "-01", 60, 1],
		["1953-03-01T01:00:00+00:00", "23:00:00", "-02", 120, 0]
	]),

	"1963" : helpers.makeTestYear("America/Noronha", [
		["1963-12-09T01:59:59+00:00", "23:59:59", "-02", 120, 0],
		["1963-12-09T02:00:00+00:00", "01:00:00", "-01", 60, 1]
	]),

	"1964" : helpers.makeTestYear("America/Noronha", [
		["1964-03-01T00:59:59+00:00", "23:59:59", "-01", 60, 1],
		["1964-03-01T01:00:00+00:00", "23:00:00", "-02", 120, 0]
	]),

	"1965" : helpers.makeTestYear("America/Noronha", [
		["1965-01-31T01:59:59+00:00", "23:59:59", "-02", 120, 0],
		["1965-01-31T02:00:00+00:00", "01:00:00", "-01", 60, 1],
		["1965-03-31T00:59:59+00:00", "23:59:59", "-01", 60, 1],
		["1965-03-31T01:00:00+00:00", "23:00:00", "-02", 120, 0],
		["1965-12-01T01:59:59+00:00", "23:59:59", "-02", 120, 0],
		["1965-12-01T02:00:00+00:00", "01:00:00", "-01", 60, 1]
	]),

	"1966" : helpers.makeTestYear("America/Noronha", [
		["1966-03-01T00:59:59+00:00", "23:59:59", "-01", 60, 1],
		["1966-03-01T01:00:00+00:00", "23:00:00", "-02", 120, 0],
		["1966-11-01T01:59:59+00:00", "23:59:59", "-02", 120, 0],
		["1966-11-01T02:00:00+00:00", "01:00:00", "-01", 60, 1]
	]),

	"1967" : helpers.makeTestYear("America/Noronha", [
		["1967-03-01T00:59:59+00:00", "23:59:59", "-01", 60, 1],
		["1967-03-01T01:00:00+00:00", "23:00:00", "-02", 120, 0],
		["1967-11-01T01:59:59+00:00", "23:59:59", "-02", 120, 0],
		["1967-11-01T02:00:00+00:00", "01:00:00", "-01", 60, 1]
	]),

	"1968" : helpers.makeTestYear("America/Noronha", [
		["1968-03-01T00:59:59+00:00", "23:59:59", "-01", 60, 1],
		["1968-03-01T01:00:00+00:00", "23:00:00", "-02", 120, 0]
	]),

	"1985" : helpers.makeTestYear("America/Noronha", [
		["1985-11-02T01:59:59+00:00", "23:59:59", "-02", 120, 0],
		["1985-11-02T02:00:00+00:00", "01:00:00", "-01", 60, 1]
	]),

	"1986" : helpers.makeTestYear("America/Noronha", [
		["1986-03-15T00:59:59+00:00", "23:59:59", "-01", 60, 1],
		["1986-03-15T01:00:00+00:00", "23:00:00", "-02", 120, 0],
		["1986-10-25T01:59:59+00:00", "23:59:59", "-02", 120, 0],
		["1986-10-25T02:00:00+00:00", "01:00:00", "-01", 60, 1]
	]),

	"1987" : helpers.makeTestYear("America/Noronha", [
		["1987-02-14T00:59:59+00:00", "23:59:59", "-01", 60, 1],
		["1987-02-14T01:00:00+00:00", "23:00:00", "-02", 120, 0],
		["1987-10-25T01:59:59+00:00", "23:59:59", "-02", 120, 0],
		["1987-10-25T02:00:00+00:00", "01:00:00", "-01", 60, 1]
	]),

	"1988" : helpers.makeTestYear("America/Noronha", [
		["1988-02-07T00:59:59+00:00", "23:59:59", "-01", 60, 1],
		["1988-02-07T01:00:00+00:00", "23:00:00", "-02", 120, 0],
		["1988-10-16T01:59:59+00:00", "23:59:59", "-02", 120, 0],
		["1988-10-16T02:00:00+00:00", "01:00:00", "-01", 60, 1]
	]),

	"1989" : helpers.makeTestYear("America/Noronha", [
		["1989-01-29T00:59:59+00:00", "23:59:59", "-01", 60, 1],
		["1989-01-29T01:00:00+00:00", "23:00:00", "-02", 120, 0],
		["1989-10-15T01:59:59+00:00", "23:59:59", "-02", 120, 0],
		["1989-10-15T02:00:00+00:00", "01:00:00", "-01", 60, 1]
	]),

	"1990" : helpers.makeTestYear("America/Noronha", [
		["1990-02-11T00:59:59+00:00", "23:59:59", "-01", 60, 1],
		["1990-02-11T01:00:00+00:00", "23:00:00", "-02", 120, 0]
	]),

	"1999" : helpers.makeTestYear("America/Noronha", [
		["1999-10-03T01:59:59+00:00", "23:59:59", "-02", 120, 0],
		["1999-10-03T02:00:00+00:00", "01:00:00", "-01", 60, 1]
	]),

	"2000" : helpers.makeTestYear("America/Noronha", [
		["2000-02-27T00:59:59+00:00", "23:59:59", "-01", 60, 1],
		["2000-02-27T01:00:00+00:00", "23:00:00", "-02", 120, 0],
		["2000-10-08T01:59:59+00:00", "23:59:59", "-02", 120, 0],
		["2000-10-08T02:00:00+00:00", "01:00:00", "-01", 60, 1],
		["2000-10-15T00:59:59+00:00", "23:59:59", "-01", 60, 1],
		["2000-10-15T01:00:00+00:00", "23:00:00", "-02", 120, 0]
	]),

	"2001" : helpers.makeTestYear("America/Noronha", [
		["2001-10-14T01:59:59+00:00", "23:59:59", "-02", 120, 0],
		["2001-10-14T02:00:00+00:00", "01:00:00", "-01", 60, 1]
	])
};