var I18n = I18n || {};
I18n.translations = {"en":{"date":{"formats":{"default":"%Y-%m-%d","short":"%b %d","long":"%B %d, %Y"},"day_names":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"abbr_day_names":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"month_names":[null,"January","February","March","April","May","June","July","August","September","October","November","December"],"abbr_month_names":[null,"Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"order":["year","month","day"]},"time":{"formats":{"default":"%a, %d %b %Y %H:%M:%S %z","short":"%d %b %H:%M","long":"%B %d, %Y %H:%M"},"am":"am","pm":"pm"},"support":{"array":{"words_connector":", ","two_words_connector":" and ","last_word_connector":", and "}},"errors":{"format":"%{attribute} %{message}","messages":{"inclusion":"is not included in the list","exclusion":"is reserved","invalid":"is invalid","confirmation":"doesn't match confirmation","accepted":"must be accepted","empty":"can't be empty","blank":"can't be blank","too_long":"is too long (maximum is %{count} characters)","too_short":"is too short (minimum is %{count} characters)","wrong_length":"is the wrong length (should be %{count} characters)","not_a_number":"is not a number","not_an_integer":"must be an integer","greater_than":"must be greater than %{count}","greater_than_or_equal_to":"must be greater than or equal to %{count}","equal_to":"must be equal to %{count}","less_than":"must be less than %{count}","less_than_or_equal_to":"must be less than or equal to %{count}","odd":"must be odd","even":"must be even"}},"activerecord":{"errors":{"messages":{"taken":"has already been taken","record_invalid":"Validation failed: %{errors}"}},"attributes":{"user":{"password_digest":"Password"}}},"number":{"format":{"separator":".","delimiter":",","precision":3,"significant":false,"strip_insignificant_zeros":false},"currency":{"format":{"format":"%u%n","unit":"$","separator":".","delimiter":",","precision":2,"significant":false,"strip_insignificant_zeros":false}},"percentage":{"format":{"delimiter":""}},"precision":{"format":{"delimiter":""}},"human":{"format":{"delimiter":"","precision":3,"significant":true,"strip_insignificant_zeros":true},"storage_units":{"format":"%n %u","units":{"byte":{"one":"Byte","other":"Bytes"},"kb":"KB","mb":"MB","gb":"GB","tb":"TB"}},"decimal_units":{"format":"%n %u","units":{"unit":"","thousand":"Thousand","million":"Million","billion":"Billion","trillion":"Trillion","quadrillion":"Quadrillion"}}}},"datetime":{"distance_in_words":{"half_a_minute":"half a minute","less_than_x_seconds":{"one":"less than 1 second","other":"less than %{count} seconds"},"x_seconds":{"one":"1 second","other":"%{count} seconds"},"less_than_x_minutes":{"one":"less than a minute","other":"less than %{count} minutes"},"x_minutes":{"one":"1 minute","other":"%{count} minutes"},"about_x_hours":{"one":"about 1 hour","other":"about %{count} hours"},"x_days":{"one":"1 day","other":"%{count} days"},"about_x_months":{"one":"about 1 month","other":"about %{count} months"},"x_months":{"one":"1 month","other":"%{count} months"},"about_x_years":{"one":"about 1 year","other":"about %{count} years"},"over_x_years":{"one":"over 1 year","other":"over %{count} years"},"almost_x_years":{"one":"almost 1 year","other":"almost %{count} years"}},"prompts":{"year":"Year","month":"Month","day":"Day","hour":"Hour","minute":"Minute","second":"Seconds"}},"helpers":{"select":{"prompt":"Please select"},"submit":{"create":"Create %{model}","update":"Update %{model}","submit":"Save %{model}"},"button":{"create":"Create %{model}","update":"Update %{model}","submit":"Save %{model}"}},"global":{"app_name":"TeacherMaps","copyright":"Copyright 2013"},"shared":{"errors":"The form contains %{count}.","error_noun":"error"},"home":{"title":"Welcome to %{app_name}","link":"Home","text":"We make lesson planning easy."},"help":{"title":"Help","link":"Help","text":"Something helpful should go here."},"about":{"title":"About","link":"About","text":"Learn about us here."},"contact":{"title":"Contact","link":"Contact","text":"Contact information goes here."},"news":{"link":"News"},"signin":{"title":"Sign in","link":"Sign in","name_label":"Username or Email","password_label":"Password","new_user":"New user? %{signup} now!","error":"We couldn't find anyone with that name and password.","profile":"Profile","settings":"Settings","signout":"Sign out"},"signup":{"title":"Sign up","link":"Sign up","name_label":"Name","email_label":"Email","pwd_label":"Password","pwdconf_label":"One more time...","account_name_label":"Username","button":"Create my account!","welcome":"Welcome to %{app_name}"},"privacy":{"link":"Privacy"},"terms":{"link":"Terms"},"feedback":{"link":"Send feedback","title":"Help make us better!","text":"Your feedback is always anonymous.","button":"Send","submit":"Sending...","generic_error":"Please reload the page and try again","success":"Thank you!"},"settings":{"dropbox_add_label":"Add DropBox","google_drive_add_label":"Add Google Drive","google_drive_open_folder":"Open Google Drive Folder","google_drive_remove_label":"Remove Google Drive","google_drive_remove_confirm":"Removing Google Drive access. This will not delete your files. Are you sure?","drop_box_add_label":"Add DropBox","drop_box_open_folder":"Open DropBox Folder","drop_box_remove_label":"Remove DropBox","drop_box_remove_confirm":"Removing DropBox access. This will not delete your files. Are you sure?","upload_to_label":"Default Upload To:","save_success":"Settings saved","save_error":"Error in saving settings","select_storage_service":"In order to upload a resource, you must select a storage service."},"google_accounts":{"google_drive":"Google Drive","removed":"Removed Google Drive Account","remove_invalid":"Delete your own Google Account!","success_sync":"Synced with Google Drive","denied_oauth":"You denied TeacherMaps access to Google Drive","already_added":"Google Drive already added"},"resources":{"synced_n_files":"Synced %{sync_count} files.","link":"Resources","sync":"Sync Files","deleted_file":"Deleted %{title}","delete_label":"Delete","delete_file_confirmation":"Delete %{title}?","resource_link_error":"There was an error opening \"%{title}\"","update_resources":"Upload Resource","title_label":"Title: ","loading_label":"Loading...","link_lable":"Link: ","upload_label":"Upload a Resource","upload_success":"Resource upload was successful!","does_not_exist":"Resouce does not exist","title_blank_error":"cannot be blank."},"link_resources":{"link_not_valid":"is not a valid web link.","link_blank_error":"cannot be blank."},"drop_box_accounts":{"drop_box":"DropBox","found_existing_account":"Found existing DropBox account","session_request_error":"There was an error requesting for DropbBox authentication","removed":"Removed DropBox Account","remove_invalid":"Delete your own DropBox Account!","success_sync":"Synced with DropBox Acccount","denied_oauth":"You denied TeacherMaps access to DropBox"}}};