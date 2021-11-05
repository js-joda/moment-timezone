"use strict";

var helpers = require("../../helpers/helpers");

exports["America/Dawson"] = {

	"guess:by:offset" : helpers.makeTestGuess("America/Dawson", { offset: true, expect: "America/Whitehorse" }),

	"guess:by:abbr" : helpers.makeTestGuess("America/Dawson", { abbr: true, expect: "America/Whitehorse" }),

	"1918" : helpers.makeTestYear("America/Dawson", [
		["1918-04-14T10:59:59+00:00", "01:59:59", "YST", 540, 0],
		["1918-04-14T11:00:00+00:00", "03:00:00", "YDT", 480, 1],
		["1918-10-27T09:59:59+00:00", "01:59:59", "YDT", 480, 1],
		["1918-10-27T10:00:00+00:00", "01:00:00", "YST", 540, 0]
	]),

	"1919" : helpers.makeTestYear("America/Dawson", [
		["1919-05-25T10:59:59+00:00", "01:59:59", "YST", 540, 0],
		["1919-05-25T11:00:00+00:00", "03:00:00", "YDT", 480, 1],
		["1919-11-01T07:59:59+00:00", "23:59:59", "YDT", 480, 1],
		["1919-11-01T08:00:00+00:00", "23:00:00", "YST", 540, 0]
	]),

	"1942" : helpers.makeTestYear("America/Dawson", [
		["1942-02-09T10:59:59+00:00", "01:59:59", "YST", 540, 0],
		["1942-02-09T11:00:00+00:00", "03:00:00", "YWT", 480, 1]
	]),

	"1945" : helpers.makeTestYear("America/Dawson", [
		["1945-08-14T22:59:59+00:00", "14:59:59", "YWT", 480, 1],
		["1945-08-14T23:00:00+00:00", "15:00:00", "YPT", 480, 1],
		["1945-09-30T09:59:59+00:00", "01:59:59", "YPT", 480, 1],
		["1945-09-30T10:00:00+00:00", "01:00:00", "YST", 540, 0]
	]),

	"1965" : helpers.makeTestYear("America/Dawson", [
		["1965-04-25T08:59:59+00:00", "23:59:59", "YST", 540, 0],
		["1965-04-25T09:00:00+00:00", "02:00:00", "YDDT", 420, 1],
		["1965-10-31T08:59:59+00:00", "01:59:59", "YDDT", 420, 1],
		["1965-10-31T09:00:00+00:00", "00:00:00", "YST", 540, 0]
	]),

	"1973" : helpers.makeTestYear("America/Dawson", [
		["1973-10-28T08:59:59+00:00", "23:59:59", "YST", 540, 0],
		["1973-10-28T09:00:00+00:00", "01:00:00", "PST", 480, 0]
	]),

	"1980" : helpers.makeTestYear("America/Dawson", [
		["1980-04-27T09:59:59+00:00", "01:59:59", "PST", 480, 0],
		["1980-04-27T10:00:00+00:00", "03:00:00", "PDT", 420, 1],
		["1980-10-26T08:59:59+00:00", "01:59:59", "PDT", 420, 1],
		["1980-10-26T09:00:00+00:00", "01:00:00", "PST", 480, 0]
	]),

	"1981" : helpers.makeTestYear("America/Dawson", [
		["1981-04-26T09:59:59+00:00", "01:59:59", "PST", 480, 0],
		["1981-04-26T10:00:00+00:00", "03:00:00", "PDT", 420, 1],
		["1981-10-25T08:59:59+00:00", "01:59:59", "PDT", 420, 1],
		["1981-10-25T09:00:00+00:00", "01:00:00", "PST", 480, 0]
	]),

	"1982" : helpers.makeTestYear("America/Dawson", [
		["1982-04-25T09:59:59+00:00", "01:59:59", "PST", 480, 0],
		["1982-04-25T10:00:00+00:00", "03:00:00", "PDT", 420, 1],
		["1982-10-31T08:59:59+00:00", "01:59:59", "PDT", 420, 1],
		["1982-10-31T09:00:00+00:00", "01:00:00", "PST", 480, 0]
	]),

	"1983" : helpers.makeTestYear("America/Dawson", [
		["1983-04-24T09:59:59+00:00", "01:59:59", "PST", 480, 0],
		["1983-04-24T10:00:00+00:00", "03:00:00", "PDT", 420, 1],
		["1983-10-30T08:59:59+00:00", "01:59:59", "PDT", 420, 1],
		["1983-10-30T09:00:00+00:00", "01:00:00", "PST", 480, 0]
	]),

	"1984" : helpers.makeTestYear("America/Dawson", [
		["1984-04-29T09:59:59+00:00", "01:59:59", "PST", 480, 0],
		["1984-04-29T10:00:00+00:00", "03:00:00", "PDT", 420, 1],
		["1984-10-28T08:59:59+00:00", "01:59:59", "PDT", 420, 1],
		["1984-10-28T09:00:00+00:00", "01:00:00", "PST", 480, 0]
	]),

	"1985" : helpers.makeTestYear("America/Dawson", [
		["1985-04-28T09:59:59+00:00", "01:59:59", "PST", 480, 0],
		["1985-04-28T10:00:00+00:00", "03:00:00", "PDT", 420, 1],
		["1985-10-27T08:59:59+00:00", "01:59:59", "PDT", 420, 1],
		["1985-10-27T09:00:00+00:00", "01:00:00", "PST", 480, 0]
	]),

	"1986" : helpers.makeTestYear("America/Dawson", [
		["1986-04-27T09:59:59+00:00", "01:59:59", "PST", 480, 0],
		["1986-04-27T10:00:00+00:00", "03:00:00", "PDT", 420, 1],
		["1986-10-26T08:59:59+00:00", "01:59:59", "PDT", 420, 1],
		["1986-10-26T09:00:00+00:00", "01:00:00", "PST", 480, 0]
	]),

	"1987" : helpers.makeTestYear("America/Dawson", [
		["1987-04-05T09:59:59+00:00", "01:59:59", "PST", 480, 0],
		["1987-04-05T10:00:00+00:00", "03:00:00", "PDT", 420, 1],
		["1987-10-25T08:59:59+00:00", "01:59:59", "PDT", 420, 1],
		["1987-10-25T09:00:00+00:00", "01:00:00", "PST", 480, 0]
	]),

	"1988" : helpers.makeTestYear("America/Dawson", [
		["1988-04-03T09:59:59+00:00", "01:59:59", "PST", 480, 0],
		["1988-04-03T10:00:00+00:00", "03:00:00", "PDT", 420, 1],
		["1988-10-30T08:59:59+00:00", "01:59:59", "PDT", 420, 1],
		["1988-10-30T09:00:00+00:00", "01:00:00", "PST", 480, 0]
	]),

	"1989" : helpers.makeTestYear("America/Dawson", [
		["1989-04-02T09:59:59+00:00", "01:59:59", "PST", 480, 0],
		["1989-04-02T10:00:00+00:00", "03:00:00", "PDT", 420, 1],
		["1989-10-29T08:59:59+00:00", "01:59:59", "PDT", 420, 1],
		["1989-10-29T09:00:00+00:00", "01:00:00", "PST", 480, 0]
	]),

	"1990" : helpers.makeTestYear("America/Dawson", [
		["1990-04-01T09:59:59+00:00", "01:59:59", "PST", 480, 0],
		["1990-04-01T10:00:00+00:00", "03:00:00", "PDT", 420, 1],
		["1990-10-28T08:59:59+00:00", "01:59:59", "PDT", 420, 1],
		["1990-10-28T09:00:00+00:00", "01:00:00", "PST", 480, 0]
	]),

	"1991" : helpers.makeTestYear("America/Dawson", [
		["1991-04-07T09:59:59+00:00", "01:59:59", "PST", 480, 0],
		["1991-04-07T10:00:00+00:00", "03:00:00", "PDT", 420, 1],
		["1991-10-27T08:59:59+00:00", "01:59:59", "PDT", 420, 1],
		["1991-10-27T09:00:00+00:00", "01:00:00", "PST", 480, 0]
	]),

	"1992" : helpers.makeTestYear("America/Dawson", [
		["1992-04-05T09:59:59+00:00", "01:59:59", "PST", 480, 0],
		["1992-04-05T10:00:00+00:00", "03:00:00", "PDT", 420, 1],
		["1992-10-25T08:59:59+00:00", "01:59:59", "PDT", 420, 1],
		["1992-10-25T09:00:00+00:00", "01:00:00", "PST", 480, 0]
	]),

	"1993" : helpers.makeTestYear("America/Dawson", [
		["1993-04-04T09:59:59+00:00", "01:59:59", "PST", 480, 0],
		["1993-04-04T10:00:00+00:00", "03:00:00", "PDT", 420, 1],
		["1993-10-31T08:59:59+00:00", "01:59:59", "PDT", 420, 1],
		["1993-10-31T09:00:00+00:00", "01:00:00", "PST", 480, 0]
	]),

	"1994" : helpers.makeTestYear("America/Dawson", [
		["1994-04-03T09:59:59+00:00", "01:59:59", "PST", 480, 0],
		["1994-04-03T10:00:00+00:00", "03:00:00", "PDT", 420, 1],
		["1994-10-30T08:59:59+00:00", "01:59:59", "PDT", 420, 1],
		["1994-10-30T09:00:00+00:00", "01:00:00", "PST", 480, 0]
	]),

	"1995" : helpers.makeTestYear("America/Dawson", [
		["1995-04-02T09:59:59+00:00", "01:59:59", "PST", 480, 0],
		["1995-04-02T10:00:00+00:00", "03:00:00", "PDT", 420, 1],
		["1995-10-29T08:59:59+00:00", "01:59:59", "PDT", 420, 1],
		["1995-10-29T09:00:00+00:00", "01:00:00", "PST", 480, 0]
	]),

	"1996" : helpers.makeTestYear("America/Dawson", [
		["1996-04-07T09:59:59+00:00", "01:59:59", "PST", 480, 0],
		["1996-04-07T10:00:00+00:00", "03:00:00", "PDT", 420, 1],
		["1996-10-27T08:59:59+00:00", "01:59:59", "PDT", 420, 1],
		["1996-10-27T09:00:00+00:00", "01:00:00", "PST", 480, 0]
	]),

	"1997" : helpers.makeTestYear("America/Dawson", [
		["1997-04-06T09:59:59+00:00", "01:59:59", "PST", 480, 0],
		["1997-04-06T10:00:00+00:00", "03:00:00", "PDT", 420, 1],
		["1997-10-26T08:59:59+00:00", "01:59:59", "PDT", 420, 1],
		["1997-10-26T09:00:00+00:00", "01:00:00", "PST", 480, 0]
	]),

	"1998" : helpers.makeTestYear("America/Dawson", [
		["1998-04-05T09:59:59+00:00", "01:59:59", "PST", 480, 0],
		["1998-04-05T10:00:00+00:00", "03:00:00", "PDT", 420, 1],
		["1998-10-25T08:59:59+00:00", "01:59:59", "PDT", 420, 1],
		["1998-10-25T09:00:00+00:00", "01:00:00", "PST", 480, 0]
	]),

	"1999" : helpers.makeTestYear("America/Dawson", [
		["1999-04-04T09:59:59+00:00", "01:59:59", "PST", 480, 0],
		["1999-04-04T10:00:00+00:00", "03:00:00", "PDT", 420, 1],
		["1999-10-31T08:59:59+00:00", "01:59:59", "PDT", 420, 1],
		["1999-10-31T09:00:00+00:00", "01:00:00", "PST", 480, 0]
	]),

	"2000" : helpers.makeTestYear("America/Dawson", [
		["2000-04-02T09:59:59+00:00", "01:59:59", "PST", 480, 0],
		["2000-04-02T10:00:00+00:00", "03:00:00", "PDT", 420, 1],
		["2000-10-29T08:59:59+00:00", "01:59:59", "PDT", 420, 1],
		["2000-10-29T09:00:00+00:00", "01:00:00", "PST", 480, 0]
	]),

	"2001" : helpers.makeTestYear("America/Dawson", [
		["2001-04-01T09:59:59+00:00", "01:59:59", "PST", 480, 0],
		["2001-04-01T10:00:00+00:00", "03:00:00", "PDT", 420, 1],
		["2001-10-28T08:59:59+00:00", "01:59:59", "PDT", 420, 1],
		["2001-10-28T09:00:00+00:00", "01:00:00", "PST", 480, 0]
	]),

	"2002" : helpers.makeTestYear("America/Dawson", [
		["2002-04-07T09:59:59+00:00", "01:59:59", "PST", 480, 0],
		["2002-04-07T10:00:00+00:00", "03:00:00", "PDT", 420, 1],
		["2002-10-27T08:59:59+00:00", "01:59:59", "PDT", 420, 1],
		["2002-10-27T09:00:00+00:00", "01:00:00", "PST", 480, 0]
	]),

	"2003" : helpers.makeTestYear("America/Dawson", [
		["2003-04-06T09:59:59+00:00", "01:59:59", "PST", 480, 0],
		["2003-04-06T10:00:00+00:00", "03:00:00", "PDT", 420, 1],
		["2003-10-26T08:59:59+00:00", "01:59:59", "PDT", 420, 1],
		["2003-10-26T09:00:00+00:00", "01:00:00", "PST", 480, 0]
	]),

	"2004" : helpers.makeTestYear("America/Dawson", [
		["2004-04-04T09:59:59+00:00", "01:59:59", "PST", 480, 0],
		["2004-04-04T10:00:00+00:00", "03:00:00", "PDT", 420, 1],
		["2004-10-31T08:59:59+00:00", "01:59:59", "PDT", 420, 1],
		["2004-10-31T09:00:00+00:00", "01:00:00", "PST", 480, 0]
	]),

	"2005" : helpers.makeTestYear("America/Dawson", [
		["2005-04-03T09:59:59+00:00", "01:59:59", "PST", 480, 0],
		["2005-04-03T10:00:00+00:00", "03:00:00", "PDT", 420, 1],
		["2005-10-30T08:59:59+00:00", "01:59:59", "PDT", 420, 1],
		["2005-10-30T09:00:00+00:00", "01:00:00", "PST", 480, 0]
	]),

	"2006" : helpers.makeTestYear("America/Dawson", [
		["2006-04-02T09:59:59+00:00", "01:59:59", "PST", 480, 0],
		["2006-04-02T10:00:00+00:00", "03:00:00", "PDT", 420, 1],
		["2006-10-29T08:59:59+00:00", "01:59:59", "PDT", 420, 1],
		["2006-10-29T09:00:00+00:00", "01:00:00", "PST", 480, 0]
	]),

	"2007" : helpers.makeTestYear("America/Dawson", [
		["2007-03-11T09:59:59+00:00", "01:59:59", "PST", 480, 0],
		["2007-03-11T10:00:00+00:00", "03:00:00", "PDT", 420, 1],
		["2007-11-04T08:59:59+00:00", "01:59:59", "PDT", 420, 1],
		["2007-11-04T09:00:00+00:00", "01:00:00", "PST", 480, 0]
	]),

	"2008" : helpers.makeTestYear("America/Dawson", [
		["2008-03-09T09:59:59+00:00", "01:59:59", "PST", 480, 0],
		["2008-03-09T10:00:00+00:00", "03:00:00", "PDT", 420, 1],
		["2008-11-02T08:59:59+00:00", "01:59:59", "PDT", 420, 1],
		["2008-11-02T09:00:00+00:00", "01:00:00", "PST", 480, 0]
	]),

	"2009" : helpers.makeTestYear("America/Dawson", [
		["2009-03-08T09:59:59+00:00", "01:59:59", "PST", 480, 0],
		["2009-03-08T10:00:00+00:00", "03:00:00", "PDT", 420, 1],
		["2009-11-01T08:59:59+00:00", "01:59:59", "PDT", 420, 1],
		["2009-11-01T09:00:00+00:00", "01:00:00", "PST", 480, 0]
	]),

	"2010" : helpers.makeTestYear("America/Dawson", [
		["2010-03-14T09:59:59+00:00", "01:59:59", "PST", 480, 0],
		["2010-03-14T10:00:00+00:00", "03:00:00", "PDT", 420, 1],
		["2010-11-07T08:59:59+00:00", "01:59:59", "PDT", 420, 1],
		["2010-11-07T09:00:00+00:00", "01:00:00", "PST", 480, 0]
	]),

	"2011" : helpers.makeTestYear("America/Dawson", [
		["2011-03-13T09:59:59+00:00", "01:59:59", "PST", 480, 0],
		["2011-03-13T10:00:00+00:00", "03:00:00", "PDT", 420, 1],
		["2011-11-06T08:59:59+00:00", "01:59:59", "PDT", 420, 1],
		["2011-11-06T09:00:00+00:00", "01:00:00", "PST", 480, 0]
	]),

	"2012" : helpers.makeTestYear("America/Dawson", [
		["2012-03-11T09:59:59+00:00", "01:59:59", "PST", 480, 0],
		["2012-03-11T10:00:00+00:00", "03:00:00", "PDT", 420, 1],
		["2012-11-04T08:59:59+00:00", "01:59:59", "PDT", 420, 1],
		["2012-11-04T09:00:00+00:00", "01:00:00", "PST", 480, 0]
	]),

	"2013" : helpers.makeTestYear("America/Dawson", [
		["2013-03-10T09:59:59+00:00", "01:59:59", "PST", 480, 0],
		["2013-03-10T10:00:00+00:00", "03:00:00", "PDT", 420, 1],
		["2013-11-03T08:59:59+00:00", "01:59:59", "PDT", 420, 1],
		["2013-11-03T09:00:00+00:00", "01:00:00", "PST", 480, 0]
	]),

	"2014" : helpers.makeTestYear("America/Dawson", [
		["2014-03-09T09:59:59+00:00", "01:59:59", "PST", 480, 0],
		["2014-03-09T10:00:00+00:00", "03:00:00", "PDT", 420, 1],
		["2014-11-02T08:59:59+00:00", "01:59:59", "PDT", 420, 1],
		["2014-11-02T09:00:00+00:00", "01:00:00", "PST", 480, 0]
	]),

	"2015" : helpers.makeTestYear("America/Dawson", [
		["2015-03-08T09:59:59+00:00", "01:59:59", "PST", 480, 0],
		["2015-03-08T10:00:00+00:00", "03:00:00", "PDT", 420, 1],
		["2015-11-01T08:59:59+00:00", "01:59:59", "PDT", 420, 1],
		["2015-11-01T09:00:00+00:00", "01:00:00", "PST", 480, 0]
	]),

	"2016" : helpers.makeTestYear("America/Dawson", [
		["2016-03-13T09:59:59+00:00", "01:59:59", "PST", 480, 0],
		["2016-03-13T10:00:00+00:00", "03:00:00", "PDT", 420, 1],
		["2016-11-06T08:59:59+00:00", "01:59:59", "PDT", 420, 1],
		["2016-11-06T09:00:00+00:00", "01:00:00", "PST", 480, 0]
	]),

	"2017" : helpers.makeTestYear("America/Dawson", [
		["2017-03-12T09:59:59+00:00", "01:59:59", "PST", 480, 0],
		["2017-03-12T10:00:00+00:00", "03:00:00", "PDT", 420, 1],
		["2017-11-05T08:59:59+00:00", "01:59:59", "PDT", 420, 1],
		["2017-11-05T09:00:00+00:00", "01:00:00", "PST", 480, 0]
	]),

	"2018" : helpers.makeTestYear("America/Dawson", [
		["2018-03-11T09:59:59+00:00", "01:59:59", "PST", 480, 0],
		["2018-03-11T10:00:00+00:00", "03:00:00", "PDT", 420, 1],
		["2018-11-04T08:59:59+00:00", "01:59:59", "PDT", 420, 1],
		["2018-11-04T09:00:00+00:00", "01:00:00", "PST", 480, 0]
	]),

	"2019" : helpers.makeTestYear("America/Dawson", [
		["2019-03-10T09:59:59+00:00", "01:59:59", "PST", 480, 0],
		["2019-03-10T10:00:00+00:00", "03:00:00", "PDT", 420, 1],
		["2019-11-03T08:59:59+00:00", "01:59:59", "PDT", 420, 1],
		["2019-11-03T09:00:00+00:00", "01:00:00", "PST", 480, 0]
	]),

	"2020" : helpers.makeTestYear("America/Dawson", [
		["2020-03-08T09:59:59+00:00", "01:59:59", "PST", 480, 0],
		["2020-03-08T10:00:00+00:00", "03:00:00", "PDT", 420, 1]
	])
};