"use strict";

var helpers = require("../../helpers/helpers");

exports["Asia/Khandyga"] = {

	"guess:by:offset" : helpers.makeTestGuess("Asia/Khandyga", { offset: true, expect: "Asia/Tokyo" }),

	"guess:by:abbr" : helpers.makeTestGuess("Asia/Khandyga", { abbr: true, expect: "Asia/Tokyo" }),

	"1930" : helpers.makeTestYear("Asia/Khandyga", [
		["1930-06-20T15:59:59+00:00", "23:59:59", "+08", -480, 0],
		["1930-06-20T16:00:00+00:00", "01:00:00", "+09", -540, 0]
	]),

	"1981" : helpers.makeTestYear("Asia/Khandyga", [
		["1981-03-31T14:59:59+00:00", "23:59:59", "+09", -540, 0],
		["1981-03-31T15:00:00+00:00", "01:00:00", "+10", -600, 1],
		["1981-09-30T13:59:59+00:00", "23:59:59", "+10", -600, 1],
		["1981-09-30T14:00:00+00:00", "23:00:00", "+09", -540, 0]
	]),

	"1982" : helpers.makeTestYear("Asia/Khandyga", [
		["1982-03-31T14:59:59+00:00", "23:59:59", "+09", -540, 0],
		["1982-03-31T15:00:00+00:00", "01:00:00", "+10", -600, 1],
		["1982-09-30T13:59:59+00:00", "23:59:59", "+10", -600, 1],
		["1982-09-30T14:00:00+00:00", "23:00:00", "+09", -540, 0]
	]),

	"1983" : helpers.makeTestYear("Asia/Khandyga", [
		["1983-03-31T14:59:59+00:00", "23:59:59", "+09", -540, 0],
		["1983-03-31T15:00:00+00:00", "01:00:00", "+10", -600, 1],
		["1983-09-30T13:59:59+00:00", "23:59:59", "+10", -600, 1],
		["1983-09-30T14:00:00+00:00", "23:00:00", "+09", -540, 0]
	]),

	"1984" : helpers.makeTestYear("Asia/Khandyga", [
		["1984-03-31T14:59:59+00:00", "23:59:59", "+09", -540, 0],
		["1984-03-31T15:00:00+00:00", "01:00:00", "+10", -600, 1],
		["1984-09-29T16:59:59+00:00", "02:59:59", "+10", -600, 1],
		["1984-09-29T17:00:00+00:00", "02:00:00", "+09", -540, 0]
	]),

	"1985" : helpers.makeTestYear("Asia/Khandyga", [
		["1985-03-30T16:59:59+00:00", "01:59:59", "+09", -540, 0],
		["1985-03-30T17:00:00+00:00", "03:00:00", "+10", -600, 1],
		["1985-09-28T16:59:59+00:00", "02:59:59", "+10", -600, 1],
		["1985-09-28T17:00:00+00:00", "02:00:00", "+09", -540, 0]
	]),

	"1986" : helpers.makeTestYear("Asia/Khandyga", [
		["1986-03-29T16:59:59+00:00", "01:59:59", "+09", -540, 0],
		["1986-03-29T17:00:00+00:00", "03:00:00", "+10", -600, 1],
		["1986-09-27T16:59:59+00:00", "02:59:59", "+10", -600, 1],
		["1986-09-27T17:00:00+00:00", "02:00:00", "+09", -540, 0]
	]),

	"1987" : helpers.makeTestYear("Asia/Khandyga", [
		["1987-03-28T16:59:59+00:00", "01:59:59", "+09", -540, 0],
		["1987-03-28T17:00:00+00:00", "03:00:00", "+10", -600, 1],
		["1987-09-26T16:59:59+00:00", "02:59:59", "+10", -600, 1],
		["1987-09-26T17:00:00+00:00", "02:00:00", "+09", -540, 0]
	]),

	"1988" : helpers.makeTestYear("Asia/Khandyga", [
		["1988-03-26T16:59:59+00:00", "01:59:59", "+09", -540, 0],
		["1988-03-26T17:00:00+00:00", "03:00:00", "+10", -600, 1],
		["1988-09-24T16:59:59+00:00", "02:59:59", "+10", -600, 1],
		["1988-09-24T17:00:00+00:00", "02:00:00", "+09", -540, 0]
	]),

	"1989" : helpers.makeTestYear("Asia/Khandyga", [
		["1989-03-25T16:59:59+00:00", "01:59:59", "+09", -540, 0],
		["1989-03-25T17:00:00+00:00", "03:00:00", "+10", -600, 1],
		["1989-09-23T16:59:59+00:00", "02:59:59", "+10", -600, 1],
		["1989-09-23T17:00:00+00:00", "02:00:00", "+09", -540, 0]
	]),

	"1990" : helpers.makeTestYear("Asia/Khandyga", [
		["1990-03-24T16:59:59+00:00", "01:59:59", "+09", -540, 0],
		["1990-03-24T17:00:00+00:00", "03:00:00", "+10", -600, 1],
		["1990-09-29T16:59:59+00:00", "02:59:59", "+10", -600, 1],
		["1990-09-29T17:00:00+00:00", "02:00:00", "+09", -540, 0]
	]),

	"1991" : helpers.makeTestYear("Asia/Khandyga", [
		["1991-03-30T16:59:59+00:00", "01:59:59", "+09", -540, 0],
		["1991-03-30T17:00:00+00:00", "02:00:00", "+09", -540, 1],
		["1991-09-28T17:59:59+00:00", "02:59:59", "+09", -540, 1],
		["1991-09-28T18:00:00+00:00", "02:00:00", "+08", -480, 0]
	]),

	"1992" : helpers.makeTestYear("Asia/Khandyga", [
		["1992-01-18T17:59:59+00:00", "01:59:59", "+08", -480, 0],
		["1992-01-18T18:00:00+00:00", "03:00:00", "+09", -540, 0],
		["1992-03-28T16:59:59+00:00", "01:59:59", "+09", -540, 0],
		["1992-03-28T17:00:00+00:00", "03:00:00", "+10", -600, 1],
		["1992-09-26T16:59:59+00:00", "02:59:59", "+10", -600, 1],
		["1992-09-26T17:00:00+00:00", "02:00:00", "+09", -540, 0]
	]),

	"1993" : helpers.makeTestYear("Asia/Khandyga", [
		["1993-03-27T16:59:59+00:00", "01:59:59", "+09", -540, 0],
		["1993-03-27T17:00:00+00:00", "03:00:00", "+10", -600, 1],
		["1993-09-25T16:59:59+00:00", "02:59:59", "+10", -600, 1],
		["1993-09-25T17:00:00+00:00", "02:00:00", "+09", -540, 0]
	]),

	"1994" : helpers.makeTestYear("Asia/Khandyga", [
		["1994-03-26T16:59:59+00:00", "01:59:59", "+09", -540, 0],
		["1994-03-26T17:00:00+00:00", "03:00:00", "+10", -600, 1],
		["1994-09-24T16:59:59+00:00", "02:59:59", "+10", -600, 1],
		["1994-09-24T17:00:00+00:00", "02:00:00", "+09", -540, 0]
	]),

	"1995" : helpers.makeTestYear("Asia/Khandyga", [
		["1995-03-25T16:59:59+00:00", "01:59:59", "+09", -540, 0],
		["1995-03-25T17:00:00+00:00", "03:00:00", "+10", -600, 1],
		["1995-09-23T16:59:59+00:00", "02:59:59", "+10", -600, 1],
		["1995-09-23T17:00:00+00:00", "02:00:00", "+09", -540, 0]
	]),

	"1996" : helpers.makeTestYear("Asia/Khandyga", [
		["1996-03-30T16:59:59+00:00", "01:59:59", "+09", -540, 0],
		["1996-03-30T17:00:00+00:00", "03:00:00", "+10", -600, 1],
		["1996-10-26T16:59:59+00:00", "02:59:59", "+10", -600, 1],
		["1996-10-26T17:00:00+00:00", "02:00:00", "+09", -540, 0]
	]),

	"1997" : helpers.makeTestYear("Asia/Khandyga", [
		["1997-03-29T16:59:59+00:00", "01:59:59", "+09", -540, 0],
		["1997-03-29T17:00:00+00:00", "03:00:00", "+10", -600, 1],
		["1997-10-25T16:59:59+00:00", "02:59:59", "+10", -600, 1],
		["1997-10-25T17:00:00+00:00", "02:00:00", "+09", -540, 0]
	]),

	"1998" : helpers.makeTestYear("Asia/Khandyga", [
		["1998-03-28T16:59:59+00:00", "01:59:59", "+09", -540, 0],
		["1998-03-28T17:00:00+00:00", "03:00:00", "+10", -600, 1],
		["1998-10-24T16:59:59+00:00", "02:59:59", "+10", -600, 1],
		["1998-10-24T17:00:00+00:00", "02:00:00", "+09", -540, 0]
	]),

	"1999" : helpers.makeTestYear("Asia/Khandyga", [
		["1999-03-27T16:59:59+00:00", "01:59:59", "+09", -540, 0],
		["1999-03-27T17:00:00+00:00", "03:00:00", "+10", -600, 1],
		["1999-10-30T16:59:59+00:00", "02:59:59", "+10", -600, 1],
		["1999-10-30T17:00:00+00:00", "02:00:00", "+09", -540, 0]
	]),

	"2000" : helpers.makeTestYear("Asia/Khandyga", [
		["2000-03-25T16:59:59+00:00", "01:59:59", "+09", -540, 0],
		["2000-03-25T17:00:00+00:00", "03:00:00", "+10", -600, 1],
		["2000-10-28T16:59:59+00:00", "02:59:59", "+10", -600, 1],
		["2000-10-28T17:00:00+00:00", "02:00:00", "+09", -540, 0]
	]),

	"2001" : helpers.makeTestYear("Asia/Khandyga", [
		["2001-03-24T16:59:59+00:00", "01:59:59", "+09", -540, 0],
		["2001-03-24T17:00:00+00:00", "03:00:00", "+10", -600, 1],
		["2001-10-27T16:59:59+00:00", "02:59:59", "+10", -600, 1],
		["2001-10-27T17:00:00+00:00", "02:00:00", "+09", -540, 0]
	]),

	"2002" : helpers.makeTestYear("Asia/Khandyga", [
		["2002-03-30T16:59:59+00:00", "01:59:59", "+09", -540, 0],
		["2002-03-30T17:00:00+00:00", "03:00:00", "+10", -600, 1],
		["2002-10-26T16:59:59+00:00", "02:59:59", "+10", -600, 1],
		["2002-10-26T17:00:00+00:00", "02:00:00", "+09", -540, 0]
	]),

	"2003" : helpers.makeTestYear("Asia/Khandyga", [
		["2003-03-29T16:59:59+00:00", "01:59:59", "+09", -540, 0],
		["2003-03-29T17:00:00+00:00", "03:00:00", "+10", -600, 1],
		["2003-10-25T16:59:59+00:00", "02:59:59", "+10", -600, 1],
		["2003-10-25T17:00:00+00:00", "02:00:00", "+09", -540, 0],
		["2003-12-31T14:59:59+00:00", "23:59:59", "+09", -540, 0],
		["2003-12-31T15:00:00+00:00", "01:00:00", "+10", -600, 0]
	]),

	"2004" : helpers.makeTestYear("Asia/Khandyga", [
		["2004-03-27T15:59:59+00:00", "01:59:59", "+10", -600, 0],
		["2004-03-27T16:00:00+00:00", "03:00:00", "+11", -660, 1],
		["2004-10-30T15:59:59+00:00", "02:59:59", "+11", -660, 1],
		["2004-10-30T16:00:00+00:00", "02:00:00", "+10", -600, 0]
	]),

	"2005" : helpers.makeTestYear("Asia/Khandyga", [
		["2005-03-26T15:59:59+00:00", "01:59:59", "+10", -600, 0],
		["2005-03-26T16:00:00+00:00", "03:00:00", "+11", -660, 1],
		["2005-10-29T15:59:59+00:00", "02:59:59", "+11", -660, 1],
		["2005-10-29T16:00:00+00:00", "02:00:00", "+10", -600, 0]
	]),

	"2006" : helpers.makeTestYear("Asia/Khandyga", [
		["2006-03-25T15:59:59+00:00", "01:59:59", "+10", -600, 0],
		["2006-03-25T16:00:00+00:00", "03:00:00", "+11", -660, 1],
		["2006-10-28T15:59:59+00:00", "02:59:59", "+11", -660, 1],
		["2006-10-28T16:00:00+00:00", "02:00:00", "+10", -600, 0]
	]),

	"2007" : helpers.makeTestYear("Asia/Khandyga", [
		["2007-03-24T15:59:59+00:00", "01:59:59", "+10", -600, 0],
		["2007-03-24T16:00:00+00:00", "03:00:00", "+11", -660, 1],
		["2007-10-27T15:59:59+00:00", "02:59:59", "+11", -660, 1],
		["2007-10-27T16:00:00+00:00", "02:00:00", "+10", -600, 0]
	]),

	"2008" : helpers.makeTestYear("Asia/Khandyga", [
		["2008-03-29T15:59:59+00:00", "01:59:59", "+10", -600, 0],
		["2008-03-29T16:00:00+00:00", "03:00:00", "+11", -660, 1],
		["2008-10-25T15:59:59+00:00", "02:59:59", "+11", -660, 1],
		["2008-10-25T16:00:00+00:00", "02:00:00", "+10", -600, 0]
	]),

	"2009" : helpers.makeTestYear("Asia/Khandyga", [
		["2009-03-28T15:59:59+00:00", "01:59:59", "+10", -600, 0],
		["2009-03-28T16:00:00+00:00", "03:00:00", "+11", -660, 1],
		["2009-10-24T15:59:59+00:00", "02:59:59", "+11", -660, 1],
		["2009-10-24T16:00:00+00:00", "02:00:00", "+10", -600, 0]
	]),

	"2010" : helpers.makeTestYear("Asia/Khandyga", [
		["2010-03-27T15:59:59+00:00", "01:59:59", "+10", -600, 0],
		["2010-03-27T16:00:00+00:00", "03:00:00", "+11", -660, 1],
		["2010-10-30T15:59:59+00:00", "02:59:59", "+11", -660, 1],
		["2010-10-30T16:00:00+00:00", "02:00:00", "+10", -600, 0]
	]),

	"2011" : helpers.makeTestYear("Asia/Khandyga", [
		["2011-03-26T15:59:59+00:00", "01:59:59", "+10", -600, 0],
		["2011-03-26T16:00:00+00:00", "03:00:00", "+11", -660, 0],
		["2011-09-12T12:59:59+00:00", "23:59:59", "+11", -660, 0],
		["2011-09-12T13:00:00+00:00", "23:00:00", "+10", -600, 0]
	])
};