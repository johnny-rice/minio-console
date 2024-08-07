// Code generated by go-swagger; DO NOT EDIT.

// This file is part of MinIO Console Server
// Copyright (c) 2023 MinIO, Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.
//

package models

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"context"
	"encoding/json"

	"github.com/go-openapi/errors"
	"github.com/go-openapi/strfmt"
	"github.com/go-openapi/swag"
	"github.com/go-openapi/validate"
)

// CreateRemoteBucket create remote bucket
//
// swagger:model createRemoteBucket
type CreateRemoteBucket struct {

	// access key
	// Required: true
	// Min Length: 3
	AccessKey *string `json:"accessKey"`

	// bandwidth
	Bandwidth int64 `json:"bandwidth,omitempty"`

	// health check period
	HealthCheckPeriod int32 `json:"healthCheckPeriod,omitempty"`

	// region
	Region string `json:"region,omitempty"`

	// secret key
	// Required: true
	// Min Length: 8
	SecretKey *string `json:"secretKey"`

	// source bucket
	// Required: true
	SourceBucket *string `json:"sourceBucket"`

	// sync mode
	// Enum: ["async","sync"]
	SyncMode *string `json:"syncMode,omitempty"`

	// target bucket
	// Required: true
	TargetBucket *string `json:"targetBucket"`

	// target URL
	// Required: true
	TargetURL *string `json:"targetURL"`
}

// Validate validates this create remote bucket
func (m *CreateRemoteBucket) Validate(formats strfmt.Registry) error {
	var res []error

	if err := m.validateAccessKey(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateSecretKey(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateSourceBucket(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateSyncMode(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateTargetBucket(formats); err != nil {
		res = append(res, err)
	}

	if err := m.validateTargetURL(formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (m *CreateRemoteBucket) validateAccessKey(formats strfmt.Registry) error {

	if err := validate.Required("accessKey", "body", m.AccessKey); err != nil {
		return err
	}

	if err := validate.MinLength("accessKey", "body", *m.AccessKey, 3); err != nil {
		return err
	}

	return nil
}

func (m *CreateRemoteBucket) validateSecretKey(formats strfmt.Registry) error {

	if err := validate.Required("secretKey", "body", m.SecretKey); err != nil {
		return err
	}

	if err := validate.MinLength("secretKey", "body", *m.SecretKey, 8); err != nil {
		return err
	}

	return nil
}

func (m *CreateRemoteBucket) validateSourceBucket(formats strfmt.Registry) error {

	if err := validate.Required("sourceBucket", "body", m.SourceBucket); err != nil {
		return err
	}

	return nil
}

var createRemoteBucketTypeSyncModePropEnum []interface{}

func init() {
	var res []string
	if err := json.Unmarshal([]byte(`["async","sync"]`), &res); err != nil {
		panic(err)
	}
	for _, v := range res {
		createRemoteBucketTypeSyncModePropEnum = append(createRemoteBucketTypeSyncModePropEnum, v)
	}
}

const (

	// CreateRemoteBucketSyncModeAsync captures enum value "async"
	CreateRemoteBucketSyncModeAsync string = "async"

	// CreateRemoteBucketSyncModeSync captures enum value "sync"
	CreateRemoteBucketSyncModeSync string = "sync"
)

// prop value enum
func (m *CreateRemoteBucket) validateSyncModeEnum(path, location string, value string) error {
	if err := validate.EnumCase(path, location, value, createRemoteBucketTypeSyncModePropEnum, true); err != nil {
		return err
	}
	return nil
}

func (m *CreateRemoteBucket) validateSyncMode(formats strfmt.Registry) error {
	if swag.IsZero(m.SyncMode) { // not required
		return nil
	}

	// value enum
	if err := m.validateSyncModeEnum("syncMode", "body", *m.SyncMode); err != nil {
		return err
	}

	return nil
}

func (m *CreateRemoteBucket) validateTargetBucket(formats strfmt.Registry) error {

	if err := validate.Required("targetBucket", "body", m.TargetBucket); err != nil {
		return err
	}

	return nil
}

func (m *CreateRemoteBucket) validateTargetURL(formats strfmt.Registry) error {

	if err := validate.Required("targetURL", "body", m.TargetURL); err != nil {
		return err
	}

	return nil
}

// ContextValidate validates this create remote bucket based on context it is used
func (m *CreateRemoteBucket) ContextValidate(ctx context.Context, formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (m *CreateRemoteBucket) MarshalBinary() ([]byte, error) {
	if m == nil {
		return nil, nil
	}
	return swag.WriteJSON(m)
}

// UnmarshalBinary interface implementation
func (m *CreateRemoteBucket) UnmarshalBinary(b []byte) error {
	var res CreateRemoteBucket
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*m = res
	return nil
}
