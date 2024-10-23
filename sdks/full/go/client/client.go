// This file was auto-generated by Fern from our API Definition.

package client

import (
	http "net/http"
	actorclient "sdk/actor/client"
	adminclient "sdk/admin/client"
	authclient "sdk/auth/client"
	cloudclient "sdk/cloud/client"
	core "sdk/core"
	gamesclient "sdk/games/client"
	groupclient "sdk/group/client"
	identityclient "sdk/identity/client"
	jobclient "sdk/job/client"
	kvclient "sdk/kv/client"
	matchmakerclient "sdk/matchmaker/client"
	portalclient "sdk/portal/client"
	provisionclient "sdk/provision/client"
)

type Client struct {
	baseURL string
	caller  *core.Caller
	header  http.Header

	Actor      *actorclient.Client
	Admin      *adminclient.Client
	Cloud      *cloudclient.Client
	Group      *groupclient.Client
	Identity   *identityclient.Client
	Kv         *kvclient.Client
	Provision  *provisionclient.Client
	Auth       *authclient.Client
	Games      *gamesclient.Client
	Job        *jobclient.Client
	Matchmaker *matchmakerclient.Client
	Portal     *portalclient.Client
}

func NewClient(opts ...core.ClientOption) *Client {
	options := core.NewClientOptions()
	for _, opt := range opts {
		opt(options)
	}
	return &Client{
		baseURL:    options.BaseURL,
		caller:     core.NewCaller(options.HTTPClient),
		header:     options.ToHeader(),
		Actor:      actorclient.NewClient(opts...),
		Admin:      adminclient.NewClient(opts...),
		Cloud:      cloudclient.NewClient(opts...),
		Group:      groupclient.NewClient(opts...),
		Identity:   identityclient.NewClient(opts...),
		Kv:         kvclient.NewClient(opts...),
		Provision:  provisionclient.NewClient(opts...),
		Auth:       authclient.NewClient(opts...),
		Games:      gamesclient.NewClient(opts...),
		Job:        jobclient.NewClient(opts...),
		Matchmaker: matchmakerclient.NewClient(opts...),
		Portal:     portalclient.NewClient(opts...),
	}
}
