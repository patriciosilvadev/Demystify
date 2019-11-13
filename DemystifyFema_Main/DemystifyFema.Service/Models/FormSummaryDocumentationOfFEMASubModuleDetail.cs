﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DemystifyFema.Service.Models
{
    public class FormSummaryDocumentationOfFEMASubModuleDetail
    {
        public int? FEMASubModuleOfModuleId { get; set; }
        public int? FormSummaryDocumentationId { get; set; }
        public string TopicName { get; set; }
        public string Year { get; set; }
        public string PDF { get; set; }
        public int ModifiedBy { get; set; }
        public string SubMenuName { get; set; }
        public string SearchText { get; set; }
        public bool? IsActive { get; set; }
        public int CreatedBy { get; set; }
        public int? PageNumber { get; set; }
        public int? PageSize { get; set; }
        public int TotalPageCount { get; set; }
        public int TotalRecord { get; set; }
        public bool IsPagingRequired { get; set; }
        public string OrderBy { get; set; }
        public string OrderByDirection { get; set; }
        public int Result { get; set; }
    }

    public class GetFormSummaryDocumentationOfFEMASubModuleDetailRequest
    {
        public int? FEMASubModuleOfModuleId { get; set; }
        public string SubMenuName { get; set; }
        public string SearchText { get; set; }
        public bool? IsActive { get; set; }
        public bool? IsVerified { get; set; }
        public int? PageNumber { get; set; }
        public int? PageSize { get; set; }
        public string OrderBy { get; set; }
        public string OrderByDirection { get; set; }
    }

    public class GetFormSummaryDocumentationOfFEMASubModuleDetailResponse
    {
        public int? FormSummaryDocumentationId { get; set; }
        public string TopicName { get; set; }
        public bool IsActive { get; set; }
        public int CreatedBy { get; set; }
        public int TotalPageCount { get; set; }
        public int TotalRecord { get; set; }
    }
}