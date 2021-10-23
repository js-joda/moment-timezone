"use strict";

var helpers = require("../../helpers/helpers");

exports["America/Barbados"] = {

	"guess:by:offset" : helpers.makeTestGuess("America/Barbados", { offset: true, expect: "America/Santo_Domingo" }),

	"guess:by:abbr" : helpers.makeTestGuess("America/Barbados", { abbr: true, expect: "America/Santo_Domingo" }),

	"1942" : helpers.makeTestYear("America/Barbados", [
		["1942-04-19T04:59:59+00:00", "00:59:59", "AST", 240, 0],
		["1942-04-19T05:00:00+00:00", "02:00:00", "ADT", 180, 1],
		["1942-08-31T05:59:59+00:00", "02:59:59", "ADT", 180, 1],
		["1942-08-31T06:00:00+00:00", "02:00:00", "AST", 240, 0]
	]),

	"1943" : helpers.makeTestYear("America/Barbados", [
		["1943-05-02T04:59:59+00:00", "00:59:59", "AST", 240, 0],
		["1943-05-02T05:00:00+00:00", "02:00:00", "ADT", 180, 1],
		["1943-09-05T05:59:59+00:00", "02:59:59", "ADT", 180, 1],
		["1943-09-05T06:00:00+00:00", "02:00:00", "AST", 240, 0]
	]),

	"1944" : helpers.makeTestYear("America/Barbados", [
		["1944-04-10T04:59:59+00:00", "00:59:59", "AST", 240, 0],
		["1944-04-10T05:00:00+00:00", "01:30:00", "-0330", 210, 1],
		["1944-09-10T05:59:59+00:00", "02:29:59", "-0330", 210, 1],
		["1944-09-10T06:00:00+00:00", "02:00:00", "AST", 240, 0]
	]),

	"1977" : helpers.makeTestYear("America/Barbados", [
		["1977-06-12T05:59:59+00:00", "01:59:59", "AST", 240, 0],
		["1977-06-12T06:00:00+00:00", "03:00:00", "ADT", 180, 1],
		["1977-10-02T04:59:59+00:00", "01:59:59", "ADT", 180, 1],
		["1977-10-02T05:00:00+00:00", "01:00:00", "AST", 240, 0]
	]),

	"1978" : helpers.makeTestYear("America/Barbados", [
		["1978-04-16T05:59:59+00:00", "01:59:59", "AST", 240, 0],
		["1978-04-16T06:00:00+00:00", "03:00:00", "ADT", 180, 1],
		["1978-10-01T04:59:59+00:00", "01:59:59", "ADT", 180, 1],
		["1978-10-01T05:00:00+00:00", "01:00:00", "AST", 240, 0]
	]),

	"1979" : helpers.makeTestYear("America/Barbados", [
		["1979-04-15T05:59:59+00:00", "01:59:59", "AST", 240, 0],
		["1979-04-15T06:00:00+00:00", "03:00:00", "ADT", 180, 1],
		["1979-09-30T04:59:59+00:00", "01:59:59", "ADT", 180, 1],
		["1979-09-30T05:00:00+00:00", "01:00:00", "AST", 240, 0]
	]),

	"1980" : helpers.makeTestYear("America/Barbados", [
		["1980-04-20T05:59:59+00:00", "01:59:59", "AST", 240, 0],
		["1980-04-20T06:00:00+00:00", "03:00:00", "ADT", 180, 1]
	])
};