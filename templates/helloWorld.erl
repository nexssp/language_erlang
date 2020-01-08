%  Nexss PROGRAMMER 2.0.0 - Erlang
%  Default template for JSON Data
%  STDIN

set_value(Key, Value, List) ->
    lists:keystore(Key, 1, List, {Key, Value}).

main(_) ->
    NexssStdin = io:get_line(""),
    {struct, NexssStdout} = mochijson2:decode(NexssStdin),
    % value = proplists:get_value(<<"cwd">>, JsonData), # To Get Value from JSON
    Version = list_to_binary(erlang:system_info(otp_release)),
    io:fwrite(mochijson2:encode(set_value(<<"HelloFromErlang">>,
					  Version, NexssStdout))).
