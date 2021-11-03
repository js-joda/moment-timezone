"use strict";

var helpers = require("../../helpers/helpers");

exports["Africa/Algiers"] = {

	"guess:by:offset" : helpers.makeTestGuess("Africa/Algiers", { offset: true, expect: "Africa/Lagos" }),

	"guess:by:abbr" : helpers.makeTestGuess("Africa/Algiers", { abbr: true }),

	"1911" : helpers.makeTestYear("Africa/Algiers", [
		["1911-03-10T23:50:38+00:00", "23:59:59", "PMT", -561 / 60, 0],
		["1911-03-10T23:50:39+00:00", "23:50:39", "WET", 0, 0]
	]),

	"1916" : helpers.makeTestYear("Africa/Algiers", [
		["1916-06-14T22:59:59+00:00", "22:59:59", "WET", 0, 0],
		["1916-06-14T23:00:00+00:00", "00:00:00", "WEST", -60, 1],
		["1916-10-01T22:59:59+00:00", "23:59:59", "WEST", -60, 1],
		["1916-10-01T23:00:00+00:00", "23:00:00", "WET", 0, 0]
	]),

	"1917" : helpers.makeTestYear("Africa/Algiers", [
		["1917-03-24T22:59:59+00:00", "22:59:59", "WET", 0, 0],
		["1917-03-24T23:00:00+00:00", "00:00:00", "WEST", -60, 1],
		["1917-10-07T22:59:59+00:00", "23:59:59", "WEST", -60, 1],
		["1917-10-07T23:00:00+00:00", "23:00:00", "WET", 0, 0]
	]),

	"1918" : helpers.makeTestYear("Africa/Algiers", [
		["1918-03-09T22:59:59+00:00", "22:59:59", "WET", 0, 0],
		["1918-03-09T23:00:00+00:00", "00:00:00", "WEST", -60, 1],
		["1918-10-06T22:59:59+00:00", "23:59:59", "WEST", -60, 1],
		["1918-10-06T23:00:00+00:00", "23:00:00", "WET", 0, 0]
	]),

	"1919" : helpers.makeTestYear("Africa/Algiers", [
		["1919-03-01T22:59:59+00:00", "22:59:59", "WET", 0, 0],
		["1919-03-01T23:00:00+00:00", "00:00:00", "WEST", -60, 1],
		["1919-10-05T22:59:59+00:00", "23:59:59", "WEST", -60, 1],
		["1919-10-05T23:00:00+00:00", "23:00:00", "WET", 0, 0]
	]),

	"1920" : helpers.makeTestYear("Africa/Algiers", [
		["1920-02-14T22:59:59+00:00", "22:59:59", "WET", 0, 0],
		["1920-02-14T23:00:00+00:00", "00:00:00", "WEST", -60, 1],
		["1920-10-23T22:59:59+00:00", "23:59:59", "WEST", -60, 1],
		["1920-10-23T23:00:00+00:00", "23:00:00", "WET", 0, 0]
	]),

	"1921" : helpers.makeTestYear("Africa/Algiers", [
		["1921-03-14T22:59:59+00:00", "22:59:59", "WET", 0, 0],
		["1921-03-14T23:00:00+00:00", "00:00:00", "WEST", -60, 1],
		["1921-06-21T22:59:59+00:00", "23:59:59", "WEST", -60, 1],
		["1921-06-21T23:00:00+00:00", "23:00:00", "WET", 0, 0]
	]),

	"1939" : helpers.makeTestYear("Africa/Algiers", [
		["1939-09-11T22:59:59+00:00", "22:59:59", "WET", 0, 0],
		["1939-09-11T23:00:00+00:00", "00:00:00", "WEST", -60, 1],
		["1939-11-18T23:59:59+00:00", "00:59:59", "WEST", -60, 1],
		["1939-11-19T00:00:00+00:00", "00:00:00", "WET", 0, 0]
	]),

	"1940" : helpers.makeTestYear("Africa/Algiers", [
		["1940-02-25T01:59:59+00:00", "01:59:59", "WET", 0, 0],
		["1940-02-25T02:00:00+00:00", "03:00:00", "CET", -60, 0]
	]),

	"1944" : helpers.makeTestYear("Africa/Algiers", [
		["1944-04-03T00:59:59+00:00", "01:59:59", "CET", -60, 0],
		["1944-04-03T01:00:00+00:00", "03:00:00", "CEST", -120, 1],
		["1944-10-07T23:59:59+00:00", "01:59:59", "CEST", -120, 1],
		["1944-10-08T00:00:00+00:00", "01:00:00", "CET", -60, 0]
	]),

	"1945" : helpers.makeTestYear("Africa/Algiers", [
		["1945-04-02T00:59:59+00:00", "01:59:59", "CET", -60, 0],
		["1945-04-02T01:00:00+00:00", "03:00:00", "CEST", -120, 1],
		["1945-09-15T22:59:59+00:00", "00:59:59", "CEST", -120, 1],
		["1945-09-15T23:00:00+00:00", "00:00:00", "CET", -60, 0]
	]),

	"1946" : helpers.makeTestYear("Africa/Algiers", [
		["1946-10-06T22:59:59+00:00", "23:59:59", "CET", -60, 0],
		["1946-10-06T23:00:00+00:00", "23:00:00", "WET", 0, 0]
	]),

	"1956" : helpers.makeTestYear("Africa/Algiers", [
		["1956-01-28T23:59:59+00:00", "23:59:59", "WET", 0, 0],
		["1956-01-29T00:00:00+00:00", "01:00:00", "CET", -60, 0]
	]),

	"1963" : helpers.makeTestYear("Africa/Algiers", [
		["1963-04-13T22:59:59+00:00", "23:59:59", "CET", -60, 0],
		["1963-04-13T23:00:00+00:00", "23:00:00", "WET", 0, 0]
	]),

	"1971" : helpers.makeTestYear("Africa/Algiers", [
		["1971-04-25T22:59:59+00:00", "22:59:59", "WET", 0, 0],
		["1971-04-25T23:00:00+00:00", "00:00:00", "WEST", -60, 1],
		["1971-09-26T22:59:59+00:00", "23:59:59", "WEST", -60, 1],
		["1971-09-26T23:00:00+00:00", "23:00:00", "WET", 0, 0]
	]),

	"1977" : helpers.makeTestYear("Africa/Algiers", [
		["1977-05-05T23:59:59+00:00", "23:59:59", "WET", 0, 0],
		["1977-05-06T00:00:00+00:00", "01:00:00", "WEST", -60, 1],
		["1977-10-20T22:59:59+00:00", "23:59:59", "WEST", -60, 1],
		["1977-10-20T23:00:00+00:00", "00:00:00", "CET", -60, 0]
	]),

	"1978" : helpers.makeTestYear("Africa/Algiers", [
		["1978-03-23T23:59:59+00:00", "00:59:59", "CET", -60, 0],
		["1978-03-24T00:00:00+00:00", "02:00:00", "CEST", -120, 1],
		["1978-09-22T00:59:59+00:00", "02:59:59", "CEST", -120, 1],
		["1978-09-22T01:00:00+00:00", "02:00:00", "CET", -60, 0]
	]),

	"1979" : helpers.makeTestYear("Africa/Algiers", [
		["1979-10-25T22:59:59+00:00", "23:59:59", "CET", -60, 0],
		["1979-10-25T23:00:00+00:00", "23:00:00", "WET", 0, 0]
	]),

	"1980" : helpers.makeTestYear("Africa/Algiers", [
		["1980-04-24T23:59:59+00:00", "23:59:59", "WET", 0, 0],
		["1980-04-25T00:00:00+00:00", "01:00:00", "WEST", -60, 1],
		["1980-10-31T00:59:59+00:00", "01:59:59", "WEST", -60, 1],
		["1980-10-31T01:00:00+00:00", "01:00:00", "WET", 0, 0]
	])
};