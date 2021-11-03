"use strict";

var helpers = require("../../helpers/helpers");

exports["Asia/Novokuznetsk"] = {

	"guess:by:offset" : helpers.makeTestGuess("Asia/Novokuznetsk", { offset: true, expect: "Asia/Jakarta" }),

	"guess:by:abbr" : helpers.makeTestGuess("Asia/Novokuznetsk", { abbr: true, expect: "Asia/Jakarta" }),

	"1930" : helpers.makeTestYear("Asia/Novokuznetsk", [
		["1930-06-20T17:59:59+00:00", "23:59:59", "+06", -360, 0],
		["1930-06-20T18:00:00+00:00", "01:00:00", "+07", -420, 0]
	]),

	"1981" : helpers.makeTestYear("Asia/Novokuznetsk", [
		["1981-03-31T16:59:59+00:00", "23:59:59", "+07", -420, 0],
		["1981-03-31T17:00:00+00:00", "01:00:00", "+08", -480, 1],
		["1981-09-30T15:59:59+00:00", "23:59:59", "+08", -480, 1],
		["1981-09-30T16:00:00+00:00", "23:00:00", "+07", -420, 0]
	]),

	"1982" : helpers.makeTestYear("Asia/Novokuznetsk", [
		["1982-03-31T16:59:59+00:00", "23:59:59", "+07", -420, 0],
		["1982-03-31T17:00:00+00:00", "01:00:00", "+08", -480, 1],
		["1982-09-30T15:59:59+00:00", "23:59:59", "+08", -480, 1],
		["1982-09-30T16:00:00+00:00", "23:00:00", "+07", -420, 0]
	]),

	"1983" : helpers.makeTestYear("Asia/Novokuznetsk", [
		["1983-03-31T16:59:59+00:00", "23:59:59", "+07", -420, 0],
		["1983-03-31T17:00:00+00:00", "01:00:00", "+08", -480, 1],
		["1983-09-30T15:59:59+00:00", "23:59:59", "+08", -480, 1],
		["1983-09-30T16:00:00+00:00", "23:00:00", "+07", -420, 0]
	]),

	"1984" : helpers.makeTestYear("Asia/Novokuznetsk", [
		["1984-03-31T16:59:59+00:00", "23:59:59", "+07", -420, 0],
		["1984-03-31T17:00:00+00:00", "01:00:00", "+08", -480, 1],
		["1984-09-29T18:59:59+00:00", "02:59:59", "+08", -480, 1],
		["1984-09-29T19:00:00+00:00", "02:00:00", "+07", -420, 0]
	]),

	"1985" : helpers.makeTestYear("Asia/Novokuznetsk", [
		["1985-03-30T18:59:59+00:00", "01:59:59", "+07", -420, 0],
		["1985-03-30T19:00:00+00:00", "03:00:00", "+08", -480, 1],
		["1985-09-28T18:59:59+00:00", "02:59:59", "+08", -480, 1],
		["1985-09-28T19:00:00+00:00", "02:00:00", "+07", -420, 0]
	]),

	"1986" : helpers.makeTestYear("Asia/Novokuznetsk", [
		["1986-03-29T18:59:59+00:00", "01:59:59", "+07", -420, 0],
		["1986-03-29T19:00:00+00:00", "03:00:00", "+08", -480, 1],
		["1986-09-27T18:59:59+00:00", "02:59:59", "+08", -480, 1],
		["1986-09-27T19:00:00+00:00", "02:00:00", "+07", -420, 0]
	]),

	"1987" : helpers.makeTestYear("Asia/Novokuznetsk", [
		["1987-03-28T18:59:59+00:00", "01:59:59", "+07", -420, 0],
		["1987-03-28T19:00:00+00:00", "03:00:00", "+08", -480, 1],
		["1987-09-26T18:59:59+00:00", "02:59:59", "+08", -480, 1],
		["1987-09-26T19:00:00+00:00", "02:00:00", "+07", -420, 0]
	]),

	"1988" : helpers.makeTestYear("Asia/Novokuznetsk", [
		["1988-03-26T18:59:59+00:00", "01:59:59", "+07", -420, 0],
		["1988-03-26T19:00:00+00:00", "03:00:00", "+08", -480, 1],
		["1988-09-24T18:59:59+00:00", "02:59:59", "+08", -480, 1],
		["1988-09-24T19:00:00+00:00", "02:00:00", "+07", -420, 0]
	]),

	"1989" : helpers.makeTestYear("Asia/Novokuznetsk", [
		["1989-03-25T18:59:59+00:00", "01:59:59", "+07", -420, 0],
		["1989-03-25T19:00:00+00:00", "03:00:00", "+08", -480, 1],
		["1989-09-23T18:59:59+00:00", "02:59:59", "+08", -480, 1],
		["1989-09-23T19:00:00+00:00", "02:00:00", "+07", -420, 0]
	]),

	"1990" : helpers.makeTestYear("Asia/Novokuznetsk", [
		["1990-03-24T18:59:59+00:00", "01:59:59", "+07", -420, 0],
		["1990-03-24T19:00:00+00:00", "03:00:00", "+08", -480, 1],
		["1990-09-29T18:59:59+00:00", "02:59:59", "+08", -480, 1],
		["1990-09-29T19:00:00+00:00", "02:00:00", "+07", -420, 0]
	]),

	"1991" : helpers.makeTestYear("Asia/Novokuznetsk", [
		["1991-03-30T18:59:59+00:00", "01:59:59", "+07", -420, 0],
		["1991-03-30T19:00:00+00:00", "02:00:00", "+07", -420, 1],
		["1991-09-28T19:59:59+00:00", "02:59:59", "+07", -420, 1],
		["1991-09-28T20:00:00+00:00", "02:00:00", "+06", -360, 0]
	]),

	"1992" : helpers.makeTestYear("Asia/Novokuznetsk", [
		["1992-01-18T19:59:59+00:00", "01:59:59", "+06", -360, 0],
		["1992-01-18T20:00:00+00:00", "03:00:00", "+07", -420, 0],
		["1992-03-28T18:59:59+00:00", "01:59:59", "+07", -420, 0],
		["1992-03-28T19:00:00+00:00", "03:00:00", "+08", -480, 1],
		["1992-09-26T18:59:59+00:00", "02:59:59", "+08", -480, 1],
		["1992-09-26T19:00:00+00:00", "02:00:00", "+07", -420, 0]
	]),

	"1993" : helpers.makeTestYear("Asia/Novokuznetsk", [
		["1993-03-27T18:59:59+00:00", "01:59:59", "+07", -420, 0],
		["1993-03-27T19:00:00+00:00", "03:00:00", "+08", -480, 1],
		["1993-09-25T18:59:59+00:00", "02:59:59", "+08", -480, 1],
		["1993-09-25T19:00:00+00:00", "02:00:00", "+07", -420, 0]
	]),

	"1994" : helpers.makeTestYear("Asia/Novokuznetsk", [
		["1994-03-26T18:59:59+00:00", "01:59:59", "+07", -420, 0],
		["1994-03-26T19:00:00+00:00", "03:00:00", "+08", -480, 1],
		["1994-09-24T18:59:59+00:00", "02:59:59", "+08", -480, 1],
		["1994-09-24T19:00:00+00:00", "02:00:00", "+07", -420, 0]
	]),

	"1995" : helpers.makeTestYear("Asia/Novokuznetsk", [
		["1995-03-25T18:59:59+00:00", "01:59:59", "+07", -420, 0],
		["1995-03-25T19:00:00+00:00", "03:00:00", "+08", -480, 1],
		["1995-09-23T18:59:59+00:00", "02:59:59", "+08", -480, 1],
		["1995-09-23T19:00:00+00:00", "02:00:00", "+07", -420, 0]
	]),

	"1996" : helpers.makeTestYear("Asia/Novokuznetsk", [
		["1996-03-30T18:59:59+00:00", "01:59:59", "+07", -420, 0],
		["1996-03-30T19:00:00+00:00", "03:00:00", "+08", -480, 1],
		["1996-10-26T18:59:59+00:00", "02:59:59", "+08", -480, 1],
		["1996-10-26T19:00:00+00:00", "02:00:00", "+07", -420, 0]
	]),

	"1997" : helpers.makeTestYear("Asia/Novokuznetsk", [
		["1997-03-29T18:59:59+00:00", "01:59:59", "+07", -420, 0],
		["1997-03-29T19:00:00+00:00", "03:00:00", "+08", -480, 1],
		["1997-10-25T18:59:59+00:00", "02:59:59", "+08", -480, 1],
		["1997-10-25T19:00:00+00:00", "02:00:00", "+07", -420, 0]
	]),

	"1998" : helpers.makeTestYear("Asia/Novokuznetsk", [
		["1998-03-28T18:59:59+00:00", "01:59:59", "+07", -420, 0],
		["1998-03-28T19:00:00+00:00", "03:00:00", "+08", -480, 1],
		["1998-10-24T18:59:59+00:00", "02:59:59", "+08", -480, 1],
		["1998-10-24T19:00:00+00:00", "02:00:00", "+07", -420, 0]
	]),

	"1999" : helpers.makeTestYear("Asia/Novokuznetsk", [
		["1999-03-27T18:59:59+00:00", "01:59:59", "+07", -420, 0],
		["1999-03-27T19:00:00+00:00", "03:00:00", "+08", -480, 1],
		["1999-10-30T18:59:59+00:00", "02:59:59", "+08", -480, 1],
		["1999-10-30T19:00:00+00:00", "02:00:00", "+07", -420, 0]
	]),

	"2000" : helpers.makeTestYear("Asia/Novokuznetsk", [
		["2000-03-25T18:59:59+00:00", "01:59:59", "+07", -420, 0],
		["2000-03-25T19:00:00+00:00", "03:00:00", "+08", -480, 1],
		["2000-10-28T18:59:59+00:00", "02:59:59", "+08", -480, 1],
		["2000-10-28T19:00:00+00:00", "02:00:00", "+07", -420, 0]
	]),

	"2001" : helpers.makeTestYear("Asia/Novokuznetsk", [
		["2001-03-24T18:59:59+00:00", "01:59:59", "+07", -420, 0],
		["2001-03-24T19:00:00+00:00", "03:00:00", "+08", -480, 1],
		["2001-10-27T18:59:59+00:00", "02:59:59", "+08", -480, 1],
		["2001-10-27T19:00:00+00:00", "02:00:00", "+07", -420, 0]
	]),

	"2002" : helpers.makeTestYear("Asia/Novokuznetsk", [
		["2002-03-30T18:59:59+00:00", "01:59:59", "+07", -420, 0],
		["2002-03-30T19:00:00+00:00", "03:00:00", "+08", -480, 1],
		["2002-10-26T18:59:59+00:00", "02:59:59", "+08", -480, 1],
		["2002-10-26T19:00:00+00:00", "02:00:00", "+07", -420, 0]
	]),

	"2003" : helpers.makeTestYear("Asia/Novokuznetsk", [
		["2003-03-29T18:59:59+00:00", "01:59:59", "+07", -420, 0],
		["2003-03-29T19:00:00+00:00", "03:00:00", "+08", -480, 1],
		["2003-10-25T18:59:59+00:00", "02:59:59", "+08", -480, 1],
		["2003-10-25T19:00:00+00:00", "02:00:00", "+07", -420, 0]
	]),

	"2004" : helpers.makeTestYear("Asia/Novokuznetsk", [
		["2004-03-27T18:59:59+00:00", "01:59:59", "+07", -420, 0],
		["2004-03-27T19:00:00+00:00", "03:00:00", "+08", -480, 1],
		["2004-10-30T18:59:59+00:00", "02:59:59", "+08", -480, 1],
		["2004-10-30T19:00:00+00:00", "02:00:00", "+07", -420, 0]
	]),

	"2005" : helpers.makeTestYear("Asia/Novokuznetsk", [
		["2005-03-26T18:59:59+00:00", "01:59:59", "+07", -420, 0],
		["2005-03-26T19:00:00+00:00", "03:00:00", "+08", -480, 1],
		["2005-10-29T18:59:59+00:00", "02:59:59", "+08", -480, 1],
		["2005-10-29T19:00:00+00:00", "02:00:00", "+07", -420, 0]
	]),

	"2006" : helpers.makeTestYear("Asia/Novokuznetsk", [
		["2006-03-25T18:59:59+00:00", "01:59:59", "+07", -420, 0],
		["2006-03-25T19:00:00+00:00", "03:00:00", "+08", -480, 1],
		["2006-10-28T18:59:59+00:00", "02:59:59", "+08", -480, 1],
		["2006-10-28T19:00:00+00:00", "02:00:00", "+07", -420, 0]
	]),

	"2007" : helpers.makeTestYear("Asia/Novokuznetsk", [
		["2007-03-24T18:59:59+00:00", "01:59:59", "+07", -420, 0],
		["2007-03-24T19:00:00+00:00", "03:00:00", "+08", -480, 1],
		["2007-10-27T18:59:59+00:00", "02:59:59", "+08", -480, 1],
		["2007-10-27T19:00:00+00:00", "02:00:00", "+07", -420, 0]
	]),

	"2008" : helpers.makeTestYear("Asia/Novokuznetsk", [
		["2008-03-29T18:59:59+00:00", "01:59:59", "+07", -420, 0],
		["2008-03-29T19:00:00+00:00", "03:00:00", "+08", -480, 1],
		["2008-10-25T18:59:59+00:00", "02:59:59", "+08", -480, 1],
		["2008-10-25T19:00:00+00:00", "02:00:00", "+07", -420, 0]
	]),

	"2009" : helpers.makeTestYear("Asia/Novokuznetsk", [
		["2009-03-28T18:59:59+00:00", "01:59:59", "+07", -420, 0],
		["2009-03-28T19:00:00+00:00", "03:00:00", "+08", -480, 1],
		["2009-10-24T18:59:59+00:00", "02:59:59", "+08", -480, 1],
		["2009-10-24T19:00:00+00:00", "02:00:00", "+07", -420, 0]
	]),

	"2010" : helpers.makeTestYear("Asia/Novokuznetsk", [
		["2010-03-27T18:59:59+00:00", "01:59:59", "+07", -420, 0],
		["2010-03-27T19:00:00+00:00", "02:00:00", "+07", -420, 1],
		["2010-10-30T19:59:59+00:00", "02:59:59", "+07", -420, 1],
		["2010-10-30T20:00:00+00:00", "02:00:00", "+06", -360, 0]
	])
};